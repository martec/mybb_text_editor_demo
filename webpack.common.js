const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const SrcDir = 'app';
const DestDir = 'public';

module.exports = {
    entry: {
        app: `./${SrcDir}/index.js`,
    },
    plugins: [
        new CleanWebpackPlugin([DestDir]),
        new HtmlWebPackPlugin({
            template: `./${SrcDir}/index.html`,
            filename: './index.html',
            hash: true,
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, DestDir),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '*', 
            '.js', 
            '.jsx',
        ],
    },
  };