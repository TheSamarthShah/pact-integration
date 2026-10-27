# Pact Integration — canonical URL consistency patch

Prepared against GitHub main branch source verified on 27 October 2026. All 12 source-file blob hashes were checked against current repository versions before modifying them.

## Why this patch is needed
Bing showed that `.html` article URLs redirect to their extensionless equivalents, while some page canonical tags and the sitemap still pointed to `.html`. This sends conflicting signals to crawlers.

## What changed
- Six `public/expertise/*.html` **source files**: canonical tags, Open Graph URLs, structured-data URLs, and internal service links now point to extensionless page URLs.
- Four `public/insights/*.html` **source files**: canonical tags and structured-data URL identifiers now point to extensionless URLs; the Step 7 AI article was already mostly correct.
- `public/index.html`: internal service and article links now use the canonical URLs; the Journal modal's generated Article Page link no longer appends `.html`.
- `app/sitemap.ts`: all 10 service and journal entries now point to extensionless URLs.

The physical file names under `public/` intentionally keep `.html`; Cloudflare's current redirect resolves those to pretty URLs. Don't rename files or disable the existing Cloudflare routing unless separately tested.

## Deployment
1. Open TheSamarthShah/pact-integration and work from the latest main branch.
2. Extract this ZIP into the **repository root**, preserving paths; overwrite the 12 listed files only.
3. Review the diff: there should be no visual redesign, backend changes, image changes, form changes, or new dependencies.
4. Commit and redeploy through the existing Cloudflare process.
5. After deployment, check `https://pactintegration.com/sitemap.xml` and inspect the extensionless URLs in Bing Live URL.
6. Once Live URL shows indexable (not redirects or canonical conflicts), request indexing once in Bing if needed. Search engines may take time to crawl and index.

## Key validation
- Physical HTML source files stay intact.
- All 10 canonical routes now match their extensionless destinations.
- Service and journal pages retain the existing content and structured data.
- Homepage content and animations are preserved; only direct links and the modal permalink suffix changed.

## Security and messaging
Your main contact form's 'Enquiries temporarily unavailable' issue is separate and is **not fixed by this patch**. Don't claim leads can be delivered until the contact API works with correct Cloudflare email-service credentials.

## Files altered
- public/expertise/custom-software-development.html (replacement occurrences: 13)
- public/expertise/dotnet-aspnet-core-development.html (replacement occurrences: 13)
- public/expertise/ai-automation-integration.html (replacement occurrences: 13)
- public/expertise/react-angular-development.html (replacement occurrences: 13)
- public/expertise/business-management-software.html (replacement occurrences: 13)
- public/expertise/dedicated-development-teams.html (replacement occurrences: 13)
- public/insights/scoping-a-useful-mvp.html (replacement occurrences: 10)
- public/insights/useful-ai-starts-with-a-workflow.html (replacement occurrences: 10)
- public/insights/software-that-fits-operations.html (replacement occurrences: 10)
- public/insights/ai-integration-aspnet-core-sql-server-n8n.html (replacement occurrences: 4)
- public/index.html (replacement occurrences: 8)
- app/sitemap.ts (replacement occurrences: 9)
