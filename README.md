# Pact Integration — AEO Step 7: Technical walkthrough (27 October 2026)

This update is based on the currently deployed V3 design language. It adds a long-form, original **illustrative technical walkthrough** about an AI-assisted invoice approval workflow with ASP.NET Core, SQL Server, n8n, and a model API. It is **not** a description of a completed client engagement or a deployable invoice-processing product.

## Files

- `public/insights/ai-integration-aspnet-core-sql-server-n8n.html` — New standalone technical article with canonical URL, TechArticle and BreadcrumbList JSON-LD, source links, practical snippets, architecture diagram, and buyer FAQs.
- `public/expertise/ai-automation-integration.html` — Adds one contextual internal link to the new article while preserving the existing page content and styling.
- `app/sitemap.ts` — Adds the new article to the existing sitemap without removing existing URLs.

## Publishing

Copy these files into the SAME locations in the existing `TheSamarthShah/pact-integration` repository; commit and deploy through the existing Cloudflare/OpenNext process. **Do not replace the entire repository or unrelated homepage files.** Verify `/insights/ai-integration-aspnet-core-sql-server-n8n.html` returns a successful HTTPS response, is linked from the AI service page, and appears in `/sitemap.xml`.

## Preview

Open the standalone HTML file. In the local preview, the favicon and some internal links refer to production `pactintegration.com` routes; those will work after deployment.

## AEO and trust notes

- No fabricated clients, testimonials, outcomes, conversion improvements or citations. `TechArticle` structured data describes the actual page, not a guarantee of Google or Microsoft AI feature inclusion.
- The C#, SQL and n8n sections are an educational architecture example. They require project-specific authentication, secrets, data governance, retry logic, evaluation and testing before production.
- After deployment, inspect the URL in Google Search Console and Bing Webmaster Tools; request crawling if needed. Measure Bing AI citations as a longer-term, secondary indicator.
- Check the separate contact-form configuration to ensure potential project enquiries can actually be delivered.

## Sources

- https://developers.openai.com/api/reference/resources/responses/methods/create
- https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/
- https://learn.microsoft.com/en-us/aspnet/core/fundamentals/http-requests
- https://developers.google.com/search/docs/appearance/ai-features
