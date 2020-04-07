"use strict";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var dev = {
    module: {
        rules: [{
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpe?g|mp4)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        // Here!!!
                        esModule: false,
                        outputPath: "images",
                        publicPath: "images",
                        name: "[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(ttf)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/"
                    }
                }]
            },
            {
                test: /\.sass$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "resolve-url-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`

                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    }
};

var dev_build = {
    module: {
        rules: [{
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpe?g)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        outputPath: "images",
                        publicPath: "images",
                        name: "[name].[ext]"
                    }
                }]
            },
            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    }
};

var pro = {
    module: {
        rules: [{
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpe?g)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        outputPath: "images",
                        publicPath: "images",
                        name: "[name].[ext]"
                    }
                }]
            },
            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    }
};

exports.dev = dev;
exports.dev_build = dev_build;
exports.pro = pro;