// vue.config.js
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
    },

    // webpack-dev-server 相关配置  
    devServer: {
        // 调试端口
        // port: 8989
    },
    //其他配置....
    chainWebpack: config => {
        config.module
            .rule('scss')
            .test(/\.scss$/)
            .oneOf('vue')
            .use('px2rem-loader')
            .loader('px2rem-loader')
            .before('postcss-loader') // this makes it work.
            .options({ remUnit: 192, remPrecision: 8 })
            .end()
    }
}
