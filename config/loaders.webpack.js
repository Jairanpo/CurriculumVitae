"use strict";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var dev = {
    module: {
        rules: [{
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/i,
                use: {
                    loader: 'url-loader',
                }
            },
            {
                test: /\.(ttf)$/i,
                use: [{
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }

                ]
            },
            {
                test: /\.sass$/i,
                use: [

                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`

                            implementation: require('sass')
                        }
                    }
                ]
            }
        ]
    }
}


var dev_build = {
    module: {
        rules: [{
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: ['file-loader']
            },
            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        }
                    }
                ]
            }
        ]
    }
}



var pro = {
    module: {
        rules: [{
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.sass$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        }
                    }
                ]
            }
        ]
    }
}

exports.dev = dev;
exports.dev_build = dev_build;
exports.pro = pro;