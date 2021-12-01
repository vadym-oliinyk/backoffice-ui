const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
  entry: {
    core: "./main.ts",
    themes: "./theme.ts",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    library: "amomedia-ui",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@root": path.resolve(__dirname, "../"),
      "@src": path.resolve(__dirname, "../src"),
      "@theme": path.resolve(__dirname, "../theme.js"),
      "@themes": path.resolve(__dirname, "../themes"),
      "@test-utils": path.resolve(__dirname, "../utils/test-utils.jsx"),
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
};

module.exports = config;
