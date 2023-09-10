/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
