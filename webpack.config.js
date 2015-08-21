var webpack = require('webpack');

var MINIFY = JSON.parse(process.env.MINIFY || '0');
var plugins = [];

if (MINIFY)
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

module.exports = {
    entry: './src/politburo.js',
    output: {
        path: 'dist',
        filename: MINIFY ? 'politburo.min.js' : 'politburo.js',
        sourceMapFilename: MINIFY ? 'politburo.min.js.map' : 'politburo.js.map',
        libraryTarget: 'umd',
        library: 'politburo'
    },
    plugins: plugins,
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /.js$/, loader: 'babel-loader'}
        ]
    }
};
