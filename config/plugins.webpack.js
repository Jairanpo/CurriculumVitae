"use strict";
const WebpackHtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var dev = {
    plugins: [
        new WebpackHtmlPlugin()
    ]
}

var dev_build = {
    plugins: [
        new MiniCssExtractPlugin(),
        new WebpackHtmlPlugin()
    ]
}

exports.dev = dev;
exports.dev_build = dev_build;