'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://127.0.0.1:81"',
    BASE_URL: '"http://127.0.0.1:81"',
    BASE_IMG: '"http://127.0.0.1:81/images"',
    BASE_UPLOAD: '"http://127.0.0.1:81/upload"',
})
