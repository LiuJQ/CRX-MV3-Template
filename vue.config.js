const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const {defineConfig} = require("@vue/cli-service");

// Generate pages object
const pagesObj = {};
const chromeName = ["popup", "options"];
chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.ts`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});

module.exports = defineConfig({
  pages: pagesObj,
  css: {
    extract: {
      filename: "css/[name].css",
    },
  },
  configureWebpack: {
    devtool: 'cheap-module-source-map',
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
