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
    // resolve: {
    //   // Add `.ts` as a resolvable extension.
    //   extensions: ['.ts', '.js']
    // },
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
  chainWebpack: config => {
    // config.module
    //   .rule('vue')
    //   .test(/\.vue$/)
    //   .include.add(path.resolve("./src/"))
    //   .end()
    //   .type("javascript/auto")
    //   .use('vue-loader')
    //   .delete("cache-loader")
    //   .tap(() => {
    //     // modify the options...
    //     return {
    //       loaders: {
    //         js: [
    //           {loader: 'cache-loader'},
    //           {loader: 'babel-loader', options: {presets: ['env']}}
    //         ]
    //       }
    //     }
    //   })
  //   config.module
  //     .rule('ts')
  //     .test(/\.ts$/)
  //     .use('ts-loader')
  //     .tap(options => {
  //       // modify the options...
  //       return { ...options, appendTsSuffixTo: [/\.vue$/] }
  //     })
  //     .end();
  }
});
