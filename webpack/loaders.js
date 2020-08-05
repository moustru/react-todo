const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'

const cssLoaders = loader => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      }
    },
    'css-loader'
  ]

  if (loader) loaders.push(loader)
  return loaders
}

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader'
    }
  ]

  return loaders
}

module.exports = {
  cssLoaders,
  jsLoaders
}
