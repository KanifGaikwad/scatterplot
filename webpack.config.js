module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                loader: 'css-loader',
                test: /\.css$/,
            }
        ]
    },
    devServer: {
        port: 3002,
        contentBase: './build',
        inline: true
    }
};