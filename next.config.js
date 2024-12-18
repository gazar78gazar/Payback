/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add this section
  webpack: (config) => {
    config.externals = [...(config.externals || []), { 'react-dom': 'ReactDOM' }];
    return config;
  },
}

module.exports = nextConfig