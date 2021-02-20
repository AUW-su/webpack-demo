const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[hash].js',
        // chunkFilename: '[name].bundle.js', // 动态导入功能：这里使用了 chunkFilename，它决定非入口 chunk 的名称
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(), // 在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件
        new HtmlWebpackPlugin({
            title: 'webpack demo'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};