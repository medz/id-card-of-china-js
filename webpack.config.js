const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    target: "web",
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "id-card-china.js",
        path: path.join(__dirname, "dist"),
        library: "identityCardChina",
        libraryTarget: "umd",
        globalObject: "window"
    },
    module: {
        rules: [
            { test: /\.js/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"])
    ],
    externals: [
        "gb-t-2260"
    ]
};
