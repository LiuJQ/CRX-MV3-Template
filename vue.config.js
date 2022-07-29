const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
  pages: {
    popup: {
      entry: `src/popup/index.ts`,
      template: "public/index.html",
      filename: "popup.html"
    },
    options: {
      entry: `src/options/index.ts`,
      template: "public/index.html",
      filename: "options.html"
    },
  },
  css: {
    extract: {
      filename: "css/[name].css",
    },
  },
  configureWebpack: {
    devtool: 'cheap-module-source-map',
    entry: {
      content: "./src/content/index.ts",
      background: "./src/background/index.ts",
    },
    output: {
      filename: "js/[name].js",
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(process.env.NODE_ENV === "production" ? "src/manifest.production.json" : "src/manifest.development.json"),
            to: `${path.resolve("dist")}/manifest.json`,
          },
          {
            from: path.resolve("src/assets"),
            to: path.resolve("dist/assets"),
          },
        ],
      })
    ]
  },
  /* eslint-disable */
  chainWebpack: config => {
  }
});
