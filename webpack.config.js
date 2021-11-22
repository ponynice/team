module.exports = {
    mode: 'development',
    rules: [
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
    ],
    performance: {

        hints: "warning", // 枚举
        
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        
        maxEntrypointSize: 500000, // 整数类型（以字节为单位）
        
        assetFilter: function(assetFilename) {
        
        // 提供资源文件名的断言函数
        
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        
        }
        
        },
    build:{
        index:path.resolve(__dirname,'./dist/index.html'),
        assetsRoot:path.resolve(__dirname,'./dist'),
        assetsSubDirectory:'static',
        assetsPubulicPath:'./'
    }
}
