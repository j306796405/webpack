/**
 * FileName webpack.config.js
 * Date 2016-06-23
 * Created by jianglinj
 */
var path = require('path'),
    webpack = require('webpack');

var config = {
    entry: {
        cart: "./src/js/page/cart",
        detail: './src/js/page/detail'
    },
    chunks: []
}
for(var key in config.entry){
    config.chunks.push(key);
}

module.exports = {
    entry: config.entry,
    output: {
        path: path.join(__dirname, 'dist/js'),
        publicPath: 'dist/js/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, 'src/js/lib/jquery.min.js')
        }
    },
    module: {
        //加载器
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.html$/, loader: "html"},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        //多入口时可以提出公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons', // 将公共模块提取，生成名为`commons`的chunk
            chunks: config.chunks
        })
    ]
}
