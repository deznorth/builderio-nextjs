const path = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    BUILDER_API_KEY: process.env.BUILDER_API_KEY,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        // Configura aliases for easy module paths
        ...config.resolve.alias,
        components: path.resolve(__dirname, 'src', 'components'),
        pages: path.resolve(__dirname, 'src', 'pages'),
        public: path.resolve(__dirname, 'public'),
        styles: path.resolve(__dirname, 'src', 'styles'),
      },
    },
  }),
}
