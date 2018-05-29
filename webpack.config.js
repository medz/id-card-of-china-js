const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    target: "web",
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    devtool: "source-map",
    entry: path.resolve(__dirname, "src", "main.ts"),
    output: {
        filename: "id-card-china.js",
        path: path.join(__dirname, "dist"),
        library: "identityCardChina",
        libraryTarget: "umd",
        globalObject: "window"
    },
    module: {
        rules: [
            { test: /\.ts/, exclude: /node_modules/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"])
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    externals: [
        "gb-t-2260"
    ]
};
