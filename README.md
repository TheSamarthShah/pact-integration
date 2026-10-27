# Pact Integration — AEO / buyer-question content update (27 October 2026)

## What changed
Six EXISTING public service pages receive distinct, practical question-and-answer content plus implementation stages and examples. Their canonical URLs, design language, headers, navigation, service schema, breadcrumbs, metadata, sitemap URLs and CTAs are preserved. No founder images, homepage scripts, contact form, or APIs are modified by this package.

## Install
Merge/copy the included `public/expertise/*.html` into the SAME paths in the existing `TheSamarthShah/pact-integration` repository. Do not replace the entire `public` folder. Commit and deploy through the existing Cloudflare/OpenNext pipeline.

## Website live vs code status
This package is a code update. A live deployment requires GitHub write access and your hosting deployment to succeed. Do not assume the public domain changed merely because the package exists.

## Production verification
- Open each of the six pages. Test 320px/390px/mobile and desktop widths and confirm layout, FAQ text and internal links.
- In Search Console, use URL Inspection for the changed pages. Existing sitemap paths are unchanged; no new sitemap submission is necessary.
- The site's contact form is separate and may be disabled until its backend/API secrets are configured. This update does NOT fix email delivery.
- Avoid fabricating customer testimonials, case studies, percentages or guarantees of being cited by AI tools.
- Google says AI search eligibility builds on normal crawlability, indexing, snippet eligibility and useful original content; FAQ structured data is not a special requirement for this business.

## Sources for implementation strategy
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://help.openai.com/en/articles/12627856
