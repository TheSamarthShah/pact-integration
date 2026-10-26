# Pact Integration — SEO and AEO implementation

## Current deployment status
This is a local deployment-ready package only. It has **not** been pushed to GitHub or deployed to Cloudflare. The GitHub integration previously returned HTTP 403 for writes.

## Primary search intent
We want direct inquiries for paid development and integration engagements. We serve companies globally; the homepage does not keyword-stuff US or UK language. Location accuracy: Ahmedabad, India.

## Keyword mapping
| Page | Focus term | Supporting intent |
|---|---|---|
| Home | custom software development, .NET development, AI integration | software engineering partner, business automation |
| /expertise/custom-software-development.html | custom software development services | bespoke software, MVP development, SaaS product engineering |
| /expertise/dotnet-aspnet-core-development.html | ASP.NET Core development services | C# development, .NET API development, legacy .NET modernisation |
| /expertise/ai-automation-integration.html | AI integration and workflow automation services | AI API integration, n8n workflow automation, human-in-the-loop automation |
| /expertise/react-angular-development.html | React and Angular web application development | frontend development, SaaS interfaces, dashboards |
| /expertise/business-management-software.html | business management software development | inventory software, ERP, school and hospital systems |
| /expertise/dedicated-development-teams.html | dedicated software development team | outsourcing partner, extended engineering team, feature delivery |

These are **editorially selected target phrases**, not paid keyword research or verified search-volume rankings.

## Implemented changes
- Homepage canonical URL, improved title and description, Open Graph and Twitter summary metadata.
- Organization, WebSite and WebPage JSON-LD with known founder names only; no invented reviews, addresses, clients or metrics.
- Six original, indexable, keyword-mapped service pages with meaningful technical explanation, question-answer sections, unique metadata, canonical URLs, and Service/BreadcrumbList structured data.
- Homepage capability directory linking all six pages, so visitors and crawlers can discover them.
- Three previous articles now include canonical URLs and BlogPosting data with Pact Integration as the publisher (no fabricated dates or author biographies).
- Updated Next.js sitemap preserving existing industry URLs while listing new pages.
- Responsive and reduced-motion-aware CSS for the new capability directory.

## Important: AEO is not a special tag
Google says good SEO and helpful original content remain the foundation for appearing in Google AI features. The old `meta keywords` tag is ignored by Google; adding hundreds of comma-separated words does not increase ranking.

## Deploy without breaking the existing app
Copy the supplied `public/` files/folders, `next.config.ts` and `app/sitemap.ts` into the existing `TheSamarthShah/pact-integration` repository. Preserve other Next.js files and existing Cloudflare configuration. The `next.config.ts` rewrite serves `public/index.html` as the homepage while leaving other Next.js routes intact.

**Do not deploy blindly**: review the hostname and redirects, run `npm run build`, verify `/`, `/about`, existing industry and admin pages, all six static pages, blog pages, `/robots.txt`, `/sitemap.xml`, canonical links, scroll animations, navigation, and actual contact-form delivery. The form is still a preview until a verified email/CRM backend exists.

## SEO/AEO launch tasks that require real business evidence
1. Connect Google Search Console and Bing Webmaster Tools. Submit sitemap and monitor actual queries and performance.
2. Confirm official logo, business email/phone and social profiles before adding those details to Organization markup.
3. Publish case studies with verified clients, before/after results, technical scope and permissions—never fictitious testimonials.
4. Create additional specific pages for inventory, school, college, and hospital only when their offerings are defined and evidence is available.
5. Measure inbound leads by source, landing page and conversion, not rankings alone.
