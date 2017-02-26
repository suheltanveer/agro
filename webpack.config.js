const path = require('path')
// const DashboardPlugin = require('webpack-dashboard/plugin')
// const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('dist/[name].css')
const extractSCSS = new ExtractTextPlugin('dist/[name].scss')

module.exports = {
  entry: [
    './app/ClientApp.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 1000,
  //   ignored: /node_modules/
  // },
  // devtool: 'cheap-module-source-map',
  // devServer: {
  //   publicPath: '/public/',
  //   historyApiFallback: true
  // },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.sass']
    // alias: {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat'
    // }
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'app')
          // path.resolve('node_modules/preact-compat/src')
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      { test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
        // loader: 'url-loader?limit=100000'
        loader: 'url-loader'
      }
      // {
      //   test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 50000
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    // new DashboardPlugin()
    extractCSS,
    extractSCSS
  ]
}
