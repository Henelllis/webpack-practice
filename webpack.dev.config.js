const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry:{
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname , './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname , './dist'),
        index: 'custom_filename.html',
        port: 9000
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
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
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

       new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            filename: 'hello-world.html',
            chunks: ['hello-world'],

        }),
        new HtmlWebpackPlugin({
            title: 'Kiwi',
            filename: 'kiwi.html',
            chunks: ['kiwi'],
        })
    ]
}