const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // other configurations...
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};