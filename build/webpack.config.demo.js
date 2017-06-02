var webpack= require('webpack');
module.exports = {
  entry: './main4',
  output: {
    // filename: '[name]-[chunkhash].js'
    filename: 'bound[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|coffee)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'entry'
    // })
  ]
}