/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
});

const nextConfig = withBundleAnalyzer(
  withPWA({
    turbopack: {},
    reactStrictMode: true,
    i18n,
  })
);

module.exports = nextConfig;
