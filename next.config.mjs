import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    })
    return config
  },
}

const withMDX = createMDX()
export default withMDX(nextConfig)