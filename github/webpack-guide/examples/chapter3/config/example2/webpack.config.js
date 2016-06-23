module.exports = {
    entry:{
        'example2.1':'./example2.1.js',
        'example2.2':'./example2.2.js'
    },
    output:{
        // filename:'[name]-bundle.js'
        // filename:'[hash].js'
        filename:'[chunkhash].js'
    }
};
