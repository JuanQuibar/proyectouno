/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['media.a24.com']
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  /* compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  } */
}

module.exports = nextConfig
