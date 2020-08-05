const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false,
            warnings: false,
            drop_console: true,
            unsafe: true
          }
        }
      })
    ]
  }

  return config
}

module.exports = optimization
