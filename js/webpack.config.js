const config = require("flarum-webpack-config");

const flarumConfig = config();
const flarumModuleRules = flarumConfig.module.rules;
const urlLoaderRules = {
  test: /\.(png|jpg|gif|svg)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 8600
      }
    }
  ]
};

module.exports = {
  ...flarumConfig,
  module: {
    rules: [...flarumModuleRules, urlLoaderRules]
  }
};
