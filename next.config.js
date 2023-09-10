/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/NaveenDA/naveenda.github.io/gh-pages/"
    : "",
};

module.exports = nextConfig;
