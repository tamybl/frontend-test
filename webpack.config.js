const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var projectRoot = process.env.PWD;

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}