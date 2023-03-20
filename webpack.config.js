const webpack = require('webpack')
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'source-map',
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            '@': path.join(__dirname, './src'),
            react: path.join(__dirname, 'node_modules', 'react'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', ".css", ".scss"],
    },
    module: {
        rules: [
            {
                test: /\.([jt])sx?$/,
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    loader: "tsx",
                    target: "es2020",
                    tsconfigRaw: require("./tsconfig.json"),
                },
            },
            {
                test: /\.[s]?[ac]ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]_[hash]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
        new Dotenv()
    ],
};
