/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: [
      '10.143.237.89',
      'localhost',
      '127.0.0.1',
    ],
  }),
}

export default nextConfig
