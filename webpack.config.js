const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        main: './src/main.js',
    },

    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Knights Travails',
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    optimization: {
        runtimeChunk: 'single',
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },


};