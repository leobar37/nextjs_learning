const tsConfigPathPlugin = require("tsconfig-paths-webpack-plugin");
const withSass = require("@zeit/next-sass");

module.exports = withSass({});
module.exports = {
  webpack: (config) => {
    if (config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(new tsConfigPathPlugin());
    return config;
  },
};
