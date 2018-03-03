'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

/*module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://localhost:81"',
    BASE_URL: '"http://localhost:81"',
    BASE_IMG: '"http://localhost:81/images"',
    BASE_UPLOAD: '"http://localhost:81/upload"',
})*/

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://a.mahuajiao.com"',
    BASE_URL: '"http://a.mahuajiao.com"',
    BASE_IMG: '"http://a.mahuajiao.com/images"',
    BASE_UPLOAD: '"http://a.mahuajiao.com/upload"',
})

