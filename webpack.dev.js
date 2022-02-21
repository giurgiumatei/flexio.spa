/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './build',
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        overlay: true,
        headers: {
            'Access-Control-Allow-Origin' : '*'
        }
    }
});