
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  output: "export",
};

module.exports = nextConfig;
