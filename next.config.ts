/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the magic line OpenNext is looking for
  output: "standalone",
  
  // Keep your other config options if you have them
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;