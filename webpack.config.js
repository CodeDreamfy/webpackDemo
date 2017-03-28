var webpack= require('webpack');
module.exports = {
  entry: {
    'example1.4': './example1.4',
    'example1.5': './example1.5'
  },
  output: {
    // filename: '[name]-[chunkhash].js'
    filename: '[name]-[hash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js',['main1','main2'])
  ]
}