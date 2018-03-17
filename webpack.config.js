
const path = require('path');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          files: ['./*.html', './styles/*.css', './scripts/*.js'],
          server: { baseDir: ['./'] }
        })
      ],
    
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [ 'style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
};