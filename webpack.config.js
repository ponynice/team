module.exports = {
    mode: 'development',
    rules: [
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
    ]
}
