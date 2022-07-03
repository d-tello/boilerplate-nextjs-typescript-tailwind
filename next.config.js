/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig)
}