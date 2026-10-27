# Pact Integration — Bing canonical and redirect fix

## Issue found (27 October 2026)

Bing Webmaster Tools reported that `https://pactintegration.com/insights/ai-integration-aspnet-core-sql-server-n8n.html` redirects to `https://pactintegration.com/insights/ai-integration-aspnet-core-sql-server-n8n`, while the destination declares the `.html` version as canonical. This inconsistency prevents the tested URLs from being accepted as canonical candidates. Bing also flagged the title as too long.

Cloudflare Pages commonly redirects `.html` static URLs to extensionless paths (https://developers.cloudflare.com/pages/configuration/serving-pages/). This package uses the **extensionless path as the single canonical URL**, matching the live redirect shown in Bing Webmaster Tools.

## Files to replace in the existing GitHub repository

1. `public/insights/ai-integration-aspnet-core-sql-server-n8n.html`: retains the underlying HTML file, changes rel=canonical, Open Graph URL, TechArticle and BreadcrumbList JSON-LD URLs to `https://pactintegration.com/insights/ai-integration-aspnet-core-sql-server-n8n` and uses a shorter HTML title.
2. `app/sitemap.ts`: lists `/insights/ai-integration-aspnet-core-sql-server-n8n` instead of the redirecting `.html` address.
3. `public/expertise/ai-automation-integration.html`: updates the article link to point to the extensionless canonical address.

Extract the ZIP **at the repository root**, preserving all other existing files. Commit to `TheSamarthShah/pact-integration` and redeploy on Cloudflare. Do not rename or delete the HTML file; Cloudflare serves it at the extensionless path.

## Verify before asking search engines to index

1. `https://pactintegration.com/insights/ai-integration-aspnet-core-sql-server-n8n` should return HTTP 200 and HTML.
2. Its rendered/source `<link rel="canonical">` should point to itself (no `.html`).
3. `.html` address should redirect once to the extensionless address (preferably HTTP 301/308).
4. `https://pactintegration.com/sitemap.xml` should include the extensionless URL only.
5. In Bing Webmaster Tools, use **Live URL** to inspect the extensionless URL; after it is indexable, request indexing *once*. Recheck Google Search Console, because Google previously inspected the `.html` URL.

## Site-wide follow-up

The same `.html` to extensionless behavior may affect other static pages in `/expertise/` and `/insights/`. Audit their canonical URLs, sitemap, Open Graph links, structured data, and internal navigation and align them consistently. The three-file patch intentionally does **not** overwrite your unrelated homepage, founders, or contact-form files.

This is a source update based on the reported Bing redirect behavior, **not proof of production deployment or Bing indexing**.
