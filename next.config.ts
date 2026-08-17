import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  experimental: {
    // Tree-shake framer-motion imports to trim the client bundle / parse cost
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
