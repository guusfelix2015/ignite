/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['localhost', 'files.stripe.com'],
  },
}

module.exports = nextConfig
