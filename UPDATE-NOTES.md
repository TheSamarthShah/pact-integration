# Pact Integration — founders without photos

The Founders section now uses consistent **SD, AB, SS** initial artworks instead of headshots. Names, labels, hover effects, carousel controls, and individual **Contact** buttons remain. There are no portrait images in this deployment package.

## Deploy
Merge the contents of this ZIP into the existing `TheSamarthShah/pact-integration` repository and deploy through its existing Cloudflare/Next.js workflow. The API route is carried over from the previous contact-form package; ensure the documented runtime email and Turnstile configuration is completed. No changes are made to the live site by downloading this package.

If the existing deployed repository contains old `public/founders` photos, delete those files from the repository when publishing this update, so they are no longer publicly accessible through direct URLs.
