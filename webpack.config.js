const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var baseConfig = require(path.resolve(__dirname, 'node_modules/patternslib/webpack/base.config.js'));


module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        "bundle": path.resolve(__dirname, "bundle-config.js"),
        "bundle.min": path.resolve(__dirname, "bundle-config.js")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'assets/script')
    },
    resolve: {
        // This line is important to supply the patternslib source files
        modules: [
                  path.resolve(__dirname, 'node_modules/patternslib/src'),
                  path.resolve(__dirname, 'src'),
                  'node_modules'
        ],
        alias: {
            "pat-content-mirror": "pat-content-mirror/src/pat-content-mirror"
        }
    },
    plugins: [
        new UglifyJsPlugin({
          cache: path.resolve(__dirname, '../cache/'),
          include: /\.min\.js$/,
          sourceMap: true,
          extractComments: false
        }),
    ],
});


