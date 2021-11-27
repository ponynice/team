// vue.config.js
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath:'./',/*很重要*/
    chainWebpack: config => {
        //路径配置
        config.resolve.alias   
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('assets',resolve('./src/assets'))
        .set('views',resolve('./src/views'))
        .set('network',resolve('./src/network'))
    },
    // webpack-dev-server 相关配置  
    devServer: {
      // 调试端口
      // port: 8989
      
    }
}
