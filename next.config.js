/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  output: "standalone",
};
