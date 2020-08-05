const path = require('path')
const { cssLoaders, jsLoaders } = require('./webpack/loaders')
const optimization = require('./webpack/optimization')
const plugins = require('./webpack/plugins')
const { filename } = require('./webpack/utils')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: [ '@babel/polyfill', './src/index.js' ],
  
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },

      {
        test: /\.css$/,
        use: cssLoaders()
      },

      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  },

  optimization: optimization(),
  plugins: plugins(),
  devtool: isDev ? 'source-map' : '',
  devServer: {
    port: 9000,
    hot: isDev
  }
}
