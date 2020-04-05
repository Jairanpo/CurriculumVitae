"use strict";

const _config =
    function compose(env) {
        return require(`./config/create.webpack.config`)(env)
    };


module.exports = function create_config(env) {
    console.log(env)
    console.log(_config(env))
    return _config(env)
};