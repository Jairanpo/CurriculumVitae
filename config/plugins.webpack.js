"use strict";
const path = require("path");
const WebpackHtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var dev = {
  plugins: [
    new WebpackHtmlPlugin({
      title: "Jair Anguiano",
      favicon: path.resolve(
        __dirname.replace("config", ""),
        "src",
        "static",
        "icons",
        "favicon.png"
      )
    })
  ]
};

var dev_build = {
  plugins: [new MiniCssExtractPlugin(), new WebpackHtmlPlugin()]
};

exports.dev = dev;
exports.dev_build = dev_build;
