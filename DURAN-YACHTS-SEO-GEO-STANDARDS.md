# Duran Yachts — SEO, GEO & Publishing Standards

Version: 1.0 | 10 November 2026 | Owner: Duran Yachts

## Purpose
Build a bilingual, accessible, trustworthy yacht-buyer advisory site whose pages are discoverable by conventional search engines and eligible to be cited by AI search systems. No checklist guarantees rankings or AI citations.

**Severity:** P0 = must pass before launch; P1 = should pass or document exception; P2 = optional experiment. **Verification:** Automated (A), Manual (M), or both (A/M).

## 1. Architecture and deployment
- [ ] **P0 A** Preserve live URLs `/`, `/es/`, `/about/`, `/es/about/`; test status 200 and correct content.
- [ ] **P0 A** Use Eleventy to generate complete HTML at build time. Primary article text must be present without JavaScript.
- [ ] **P0 A** Keep the Cloudflare contact API functional, and test from English and Spanish pages.
- [ ] **P0 A** Generate pages into one deployment directory; do not edit generated files as source.
- [ ] **P0 A** Stage migration separately, compare URLs, then deploy with rollback plan.
- [ ] **P1 A** Reuse shared header, footer, SEO head, analytics/consent, article, and breadcrumbs templates.
- [ ] **P1 M** Ensure navigation and calls to action suit a personal buyer-side advisory service, not a large brokerage marketplace.

## 2. Crawlability and indexing
- [ ] **P0 A** Public pages return HTTP 200; removed URLs use appropriate 301/308 or 404/410, not soft 404s.
- [ ] **P0 A** Production pages are not blocked by `robots.txt`, `noindex`, or accidental staging controls.
- [ ] **P0 A** Exactly one canonical per indexable page, pointing to the intended production URL.
- [ ] **P0 A** Generate XML sitemap containing only canonical, indexable URLs; refresh automatically on builds.
- [ ] **P0 A** Check redirects: HTTP to HTTPS, apex to preferred www, legacy `/en/` to `/`.
- [ ] **P0 A** Protect sensitive paths, secrets, `.git` metadata and deployment configuration.
- [ ] **P1 M** Review crawler policies separately for Googlebot, Bingbot and relevant AI search crawlers; decide intentionally which to permit. Do not assume all AI crawlers have identical purposes.
- [ ] **P1 A/M** Inspect actual rendered HTML and response headers, not just source templates.

## 3. International SEO (English and Spanish)
- [ ] **P0 A** English root `/`, Spanish `/es/`; translated pages use their own canonical URL.
- [ ] **P0 A** Set correct `<html lang="en">` or `<html lang="es">`.
- [ ] **P0 A** Use reciprocal `hreflang="en"` and `hreflang="es"` for genuinely corresponding pages, including self-reference; omit a counterpart if not translated.
- [ ] **P1 A** Language switch links to the equivalent page, or an intentional fallback when unavailable.
- [ ] **P1 M** Translate naturally; avoid mechanically duplicated or awkwardly localized yacht terminology.
- [ ] **P1 A/M** Verify localized titles, descriptions, breadcrumbs, navigation, contact prompts and structured-data language.
- [ ] **P2 M** Decide whether `x-default` is useful for each language pair; do not add reflexively.

## 4. Page-level SEO
- [ ] **P0 A** Every indexable page has one descriptive `<title>` and one meaningful main H1.
- [ ] **P0 A** Canonical, Open Graph URL and structured-data URL agree.
- [ ] **P1 A/M** Unique meta description accurately summarizes the page; no keyword stuffing.
- [ ] **P1 A/M** Semantic headings (H1/H2/H3), descriptive anchors, descriptive image alt text where appropriate.
- [ ] **P1 A/M** Relevant internal links from articles to related guides, About, advisory services and Contact.
- [ ] **P1 A** Provide a clear breadcrumb path on article pages.
- [ ] **P1 M** Optimize images for size and responsiveness; ensure important text is HTML, not embedded in images.
- [ ] **P2 A** Social sharing metadata (Open Graph and other appropriate tags).

## 5. Structured data
- [ ] **P0 A/M** JSON-LD parses and describes only content visible and true on the page.
- [ ] **P1 A/M** Use consistent `Person` and business identity across About, articles and homepage; verify exact legal/brand details before publication.
- [ ] **P1 A/M** Use `Article`/`BlogPosting` for editorial pages, `BreadcrumbList` for real breadcrumb trails, and suitable business schema where supported.
- [ ] **P1 A/M** Article author, headline, publication/update dates, image and language match visible content.
- [ ] **P1 A/M** Test applicable rich-result markup with Google Rich Results Test and general JSON-LD/schema validation separately.
- [ ] **P0 M** Never add fabricated reviews, ratings, credentials, offers, FAQs or claims solely to obtain rich results.

## 6. GEO / AI-search readiness
- [ ] **P0 M** Answer a real buyer or sailor question directly near the start of each guide.
- [ ] **P0 M** Add first-hand observations, decision criteria, exceptions, tradeoffs and concrete examples where genuinely supported.
- [ ] **P0 M** Attribute original writing clearly to Salva Durán; verify any credentials and personal experience stated.
- [ ] **P0 M** Distinguish original material, licensed material, excerpts, external links and third-party PDFs; do not republish without rights.
- [ ] **P1 M** Cite authoritative primary sources for regulations, weather services, tax/legal matters and specifications; date time-sensitive claims.
- [ ] **P1 M** Use concise definitions, meaningful comparison tables and clearly labeled recommendations where useful—not artificial 'AI-friendly' filler.
- [ ] **P1 A/M** Keep article text in HTML, with descriptive URLs, stable headings and working internal links.
- [ ] **P1 M** Use consistent descriptions of the person, business, geography and buyer-side advisory positioning across pages.
- [ ] **P2 M** Test representative questions in AI search products periodically and record observed citations with date, prompt and region; results are variable and not guaranteed.
- [ ] **P2 M** Consider `llms.txt` only as an experiment, not a substitute for crawlable pages, sitemaps or established SEO.

## 7. Content and editorial review
- [ ] **P0 M** Each article has one primary audience, user intent and clear reason to exist.
- [ ] **P0 M** Review for technical accuracy, safe seamanship, misleading generalizations and unsupported promises.
- [ ] **P0 M** Label legal, tax, customs, charter and flag-state issues as jurisdiction-dependent; avoid implying personal legal advice.
- [ ] **P1 M** Add author, date published, meaningful date updated, region applicability and related reading.
- [ ] **P1 M** Avoid near-duplicate pages and mass-produced thin content; consolidate overlapping topics.
- [ ] **P1 M** Keep commercial intent transparent: advisory service links should help readers, not overwhelm content.
- [ ] **P1 M** Revisit time-sensitive content (marine rules, software, prices) on a defined review schedule.

## 8. Performance, accessibility and UX
- [ ] **P0 A/M** Mobile navigation, language switch, forms, keyboard access and consent controls work.
- [ ] **P1 A** Test Core Web Vitals: LCP, INP and CLS on representative templates; measure real-user data when available.
- [ ] **P1 A/M** Check contrast, focus states, meaningful labels, heading structure and screen-reader basics.
- [ ] **P1 A** Compress responsive images, defer nonessential JavaScript, limit third-party scripts.
- [ ] **P1 A** Verify HTTPS, security headers and absence of mixed-content errors.

## 9. Analytics, consent and privacy
- [ ] **P0 A/M** GA4 uses the existing property and measurement ID; no duplicate pageviews from old/new scripts.
- [ ] **P0 A/M** No GA4 analytics requests or nonessential analytics cookies before consent where opt-in is required.
- [ ] **P0 A/M** Accept, Reject and reopen-preferences controls work across all four existing pages and future pages.
- [ ] **P0 A/M** Test first visit, returning visit, language switch, rejected state and consent changes.
- [ ] **P1 M** Maintain a truthful privacy/cookie disclosure and assess applicable legal requirements with qualified advice.
- [ ] **P1 M** Track meaningful conversions such as qualified contact submissions, not just visits.

## 10. Monitoring and release gates
- [ ] **P0 A** Automated build passes; no broken internal links, missing canonicals or accidental `noindex` on production.
- [ ] **P0 A** Test production HTTP responses for home, About, Resources, sample article, sitemap, robots and 404.
- [ ] **P0 M** Spot-check EN/ES page pairs and actual mobile rendering.
- [ ] **P0 M** Submit a test contact inquiry; verify the email delivery workflow.
- [ ] **P1 M** Review Google Search Console and Bing Webmaster Tools after release for crawl/indexing anomalies.
- [ ] **P1 M** Maintain a monthly dashboard: impressions, clicks, indexed pages, contact inquiries, and documented AI citations (if any).
- [ ] **P1 M** Keep release notes and a rollback procedure.

## Article publishing template (required fields)
```
title: ""
description: ""
slug: ""
lang: "en" # or "es"
author: "Salva Durán"
date: YYYY-MM-DD
updated: YYYY-MM-DD # only if meaningfully updated
category: "yacht-buying" # or weather-navigation / sailing-knowledge / insights
translationKey: ""
status: "draft" # or published
```

### Human editorial sign-off (before publishing)
1. Who is this for, and what decision does it help them make?
2. What first-hand knowledge is genuinely ours?
3. Which claims need sources, and are they verified?
4. Are external materials used with appropriate rights?
5. Is the English or Spanish translation accurate and complete?
6. Does the page help a potential buyer without becoming a sales pitch?
7. Would we be comfortable having this article quoted by an AI assistant?

## Recommended tooling (to configure during migration)
- Eleventy: static builds and reusable layouts.
- HTML/metadata checks: custom build-time assertions for canonical, H1, language, title, hreflang and sitemap.
- Link checking: automated internal link checker.
- Lighthouse / PageSpeed Insights: performance and accessibility diagnostics.
- Schema.org Validator and Google Rich Results Test: structured-data review.
- Google Search Console + Bing Webmaster Tools: indexing and search performance.
- GA4 DebugView/Realtime + browser network inspection: consent and analytics verification.

## Success criteria
**Launch success:** existing URLs and forms work; technical checks pass; content is accessible, accurate and bilingual; no unapproved analytics leakage.

**Long-term success:** qualified buyer inquiries and relevant organic discovery increase; pages earn trustworthy references and, where observable, citations in AI search. Neither rankings nor AI citations are guaranteed.

## Sources to verify as we implement
- Google Search Central: SEO Starter Guide; Search Essentials; canonicalization; localized versions/hreflang; structured data guidance.
- Google Search Central: guidance for AI features and website owners.
- Bing Webmaster Guidelines and IndexNow documentation.
- Schema.org vocabulary and Google Rich Results Test.
- web.dev Core Web Vitals guidance.
- Cloudflare Pages and Eleventy official documentation.

This is a project standard, not a certification or guarantee of Google/Bing/AI platform treatment. Update as official guidance and the website evolve.
