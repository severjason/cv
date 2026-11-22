/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withSerwist = require('@serwist/next').default({
  disable: process.env.NODE_ENV !== 'production',
  swSrc: 'src/service-worker.ts',
  swDest: 'public/sw.js',
});

module.exports = withBundleAnalyzer(
  withSerwist({
    turbopack: {},
    reactStrictMode: true,
    i18n,
  })
);
