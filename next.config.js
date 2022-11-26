/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const withPWA = require('next-pwa')({
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
})
const nextConfig = withPWA(
    {
        reactStrictMode: true,
        compiler: {
            emotion: true
        },
        i18n
    }
)

module.exports = nextConfig;