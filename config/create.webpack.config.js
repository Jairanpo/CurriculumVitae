"use strict";

const path = require("path");
const merge = require('webpack-merge');
const dev_plugins = require("./plugins.webpack").dev;
const dev_build_plugins = require("./plugins.webpack").dev_build;

var development = {
    mode: "development",
    entry: path.resolve(__dirname.replace("config", ""), "src", "index.js"),
    output: {
        path: path.resolve(__dirname.replace("config", ""), "dist"),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true
    }
}

var development_build = {
    mode: "development",
    entry: path.resolve(__dirname.replace("config", ""), "src", "index.js"),
    output: {
        path: path.resolve(__dirname.replace("config", ""), "dist"),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true
    }
}

var production = {
    mode: "production",
    entry: path.resolve(__dirname.replace("config", ""), "src", "index.js"),
    output: {
        path: path.resolve(__dirname.replace("config", ""), "dist"),
        filename: 'bundle.js'
    }
}


var create_config = function create_config(env) {
    if (env.mode == "dev") {
        return merge(
            development,
            dev_plugins,
            require("./loaders.webpack").dev
        );
    } else if (env.mode == "pro") {
        return merge(
            production,
            dev_build_plugins,
            require("./loaders.webpack").pro
        )
    } else if (env.mode == "dev_build") {
        return merge(
            development_build,
            dev_build_plugins,
            require("./loaders.webpack").dev_build
        )
    }
}


module.exports = create_config