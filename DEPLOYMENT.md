# Pact Integration V3 Motion Plus — GitHub deployment

Target repository: `TheSamarthShah/pact-integration`, branch `main`.

These files were prepared for the existing Next.js 16 / Cloudflare OpenNext project. Copy the `public` directory contents into the repository `public` directory, and replace `next.config.ts` with the included version. **Do not delete the other existing Next.js files and folders**.

The homepage route (`/`) rewrites to the new `public/index.html`. Existing Next.js routes remain in the project. The three permanent blog pages live at `/insights/*.html`.

Check deployment in your Cloudflare pipeline after committing to GitHub. Github repo push and production deployment are different operations.

Before publishing: confirm that the inquiry form actually delivers leads (currently preview behavior), verify founder and client/partner details, review demo product metrics and test the live URL including older pages and admin routes.

Changes were NOT pushed by ChatGPT: GitHub connector returned HTTP 403 `Resource not accessible by integration` for both Git Trees and Contents write endpoints.

## SEO/AEO updates
See `SEO_AEO_PLAN.md` for canonical/meta/schema changes, service landing pages and a preserved extended sitemap. Also copy `app/sitemap.ts` from the package into the existing Next.js project.
