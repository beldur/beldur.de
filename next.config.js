/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

if (process.env.NEXTJS_EXPORT) {
  console.log('Adding output export...')
  nextConfig.output = 'export'
}

module.exports = nextConfig
