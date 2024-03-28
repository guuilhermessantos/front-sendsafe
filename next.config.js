const withImages = require('next-images')

module.exports = withImages({
  // esModule: true,
  pageExtensions: ['tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
})
