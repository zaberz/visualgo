const path = require('path');

const resolve = p => path.resolve(__dirname, './', p);

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: [['istanbul', {
                        exclude: [
                            'test/'
                        ]
                    }]]
                }
            },
        ],
    },
    resolve: {
        alias: {
            '@src': resolve('src'),
        },
    },
};