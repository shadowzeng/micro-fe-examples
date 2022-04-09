const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, './'),
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    loader: "tsx",
                    target: "es2015",
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            inject: "body",
        })
    ],
    devServer: {
        compress: true,
        port: 9080,
    },
}