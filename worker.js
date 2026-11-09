const FIELDS = ['name','email','budget','timeframe','region','boat','message'];
const reply = (body, status=200) => new Response(JSON.stringify(body), {
  status, headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}
});
const esc = (v) => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export default {
  
async fetch(request, env) {
  const url = new URL(request.url);

  if (url.pathname === '/en' || url.pathname === '/en/') {
    return Response.redirect('https://www.duranyachts.com/', 301);
  }

  if(url.pathname !== '/api/contact') return env.ASSETS.fetch(request);

    if(request.method !== 'POST') return reply({ok:false,error:'Method not allowed'},405);
    const origin=request.headers.get('origin');
    if(origin && new URL(origin).hostname !== url.hostname) return reply({ok:false,error:'Invalid origin'},403);
    if(!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return reply({ok:false,error:'JSON required'},415);
    if(Number(request.headers.get('content-length')||0)>12000) return reply({ok:false,error:'Message too long'},413);
    let payload;
    try { const raw=await request.text(); if(raw.length>12000) return reply({ok:false,error:'Message too long'},413); payload=JSON.parse(raw); }
    catch {return reply({ok:false,error:'Invalid request'},400);}
    if(!payload || typeof payload !== 'object' || Array.isArray(payload)) return reply({ok:false,error:'Invalid request'},400);
    const data={};
    for(const key of FIELDS){if(payload[key]!=null && typeof payload[key]!=='string')return reply({ok:false,error:'Invalid field'},400);data[key]=String(payload[key]||'').trim();}
    if(!data.name || data.name.length>160 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length>254 || data.message.length>5000 || FIELDS.some(k=>data[k].length>5000)) return reply({ok:false,error:'Please check your details'},400);
    if(!env.RESEND_API_KEY) return reply({ok:false,error:'Email service not configured'},503);
    const html='<h2>New Duran Yachts inquiry</h2>'+FIELDS.map(k=>'<p><strong>'+esc(k)+':</strong> '+esc(data[k]).replace(/\n/g,'<br>')+'</p>').join('');
    let response;
    try { response=await fetch('https://api.resend.com/emails',{
      method:'POST',headers:{'Authorization':'Bearer '+env.RESEND_API_KEY,'Content-Type':'application/json'},
      body:JSON.stringify({from:'Duran Yachts Website <website@duranyachts.com>',to:['salva@duranyachts.com'],reply_to:data.email,subject:'New yacht project inquiry — '+data.name,html})
    });} catch {return reply({ok:false,error:'Email service unavailable'},502);}
    if(!response.ok){console.error('Resend failed',response.status,await response.text());return reply({ok:false,error:'Email delivery failed'},502);}
    return reply({ok:true});
  }
};
