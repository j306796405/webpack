var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var srcDir = path.resolve(process.cwd(), 'src');

//获取多页面的每个入口文件，用于配置中的entry
/*function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        console.log(matchs);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    console.log(JSON.stringify(files));
    return files;
}*/

module.exports = {
    cache: true,
    devtool: "source-map",
    entry: {
        index: "./src/js/page/index",
        detail: './src/js/page/detail'
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        // publicPath: "dist/js/",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },
    resolve: {
        alias: {
            jquery: srcDir + "/js/lib/jquery.min.js",
            artTemplate: srcDir + "/js/lib/template-native.js"
        }
    },
    module: {
        loaders: []
    },
    plugins: [
        new CommonsChunkPlugin('common.js'),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'commons', // 将公共模块提取，生成名为`commons`的chunk
            chunks: config.chunks
        })*/
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        })
        /*new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
    ]
};