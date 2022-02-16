/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Flexio',
            template: path.resolve(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, 'public', 'favicon.ico')
        }),
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ['ts', 'tsx']
        }),
        new CopyWebpackPlugin({
            patterns: [{ from : 'src/static', to: 'static' }]
        })
    ],
    stats: 'minimal',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            }
        ]
    }
};