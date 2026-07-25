/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Note: If you are using next/image, you must disable the default optimization
  // or use a custom loader, as Cloudflare does not support Vercel's image optimizer.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;