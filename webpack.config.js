var webpack= require('webpack');
module.exports = {
  entry: {
    'main1': './main1',
    'main2': './main2'
  },
  output: {
    // filename: '[name]-[chunkhash].js'
    filename: '[name]-[hash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'entry'
    })
  ]
}