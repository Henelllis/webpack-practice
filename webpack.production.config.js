const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
module.exports = {
    entry:{
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname , './dist'),
        publicPath: '/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader' ,
                    'sass-loader'                  
                ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['stage-0']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
       new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            chunks:['hello-world', 'vendors-hellow-world~kiwi'],
            filename: 'hello-world.html',
            meta: {
                viewport: 'width=device-width, intial-scale=1'
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Kiwi',
            chunks:['kiwi' , 'vendors-hellow-world~kiwi'],
            filename: 'kiwi.html',
            meta: {
                viewport: 'width=device-width, intial-scale=1'
            }
        })
    ]
}