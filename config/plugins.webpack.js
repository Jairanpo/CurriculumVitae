"use strict";
const path = require("path");
const WebpackHtmlPlugin = require("html-webpack-plugin");

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

var pro = {
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

exports.dev = dev;
exports.dev_build = dev_build;
exports.pro = pro;
