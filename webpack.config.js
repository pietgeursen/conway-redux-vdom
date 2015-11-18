module.exports = {
    entry: "./src/game.js",
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};
