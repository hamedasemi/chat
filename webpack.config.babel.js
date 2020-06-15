import path from 'path';

import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    entry: {
        app: './app/app.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[chunkhash].js',
        chunkFilename: '[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: '#eval-source-map',
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            },
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // @ts-ignore
        new webpack.optimize.AggressiveSplittingPlugin({
            minSize: 30000,
            maxSize: 50000
        }),
        new HtmlWebpackPlugin({
            base: '/',
            chunks: ['app'],
            filename: 'index.html',
            template: 'index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'assets', to: 'assets', globOptions: {
                        ignore: ['**/.DS_Store'],
                    },
                }
            ],
        }),
    ],
    devServer: {
        host: '0.0.0.0',
        useLocalIp: true,
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8080,
        open: true,
        historyApiFallback: true
    }
};