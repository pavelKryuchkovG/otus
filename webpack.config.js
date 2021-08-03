const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            types: path.resolve(__dirname, "src/types"),
            components: path.resolve(__dirname, "src/components"),
            "@": path.resolve(__dirname, "src"),
        }
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.worker\.(ts|js)$/,
                use: { loader: "worker-loader" },
            },
            {
                test: /\.(js|ts)x?$/,
                loader: require.resolve("babel-loader"),
                exclude: /node_modules/,
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        host: '127.0.0.1'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}