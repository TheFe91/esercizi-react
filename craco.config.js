const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Containers': path.resolve(__dirname, 'src/containers/'),
      '@Resources': path.resolve(__dirname, 'src/resources/'),
      '@Src': path.resolve(__dirname, 'src/'),
    },
  },
  devServer: {
    port: 3001,
  },
};
