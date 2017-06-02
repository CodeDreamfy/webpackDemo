var webpack = require('webpack');
var path = require('path');
var glob = require('glob')
const { join, resolve } = require('path')

const entries = {}
const chunks = []
const sourceDir = "src";
const assert = require('assert');

// glob.sync('./src/pages/**/main.js').forEach(path => {
//   const chunk = path.split('./src/pages/')[1].split('/main.js')[0]
//   // console.log(chunk)
//   entries[chunk] = path
//   chunks.push(path)
// })

function sourceMap(suffix) {
  const maps = {};
  glob.sync(`${sourceDir}/pages/**/*.${suffix}`).forEach(function (url) {
    const ret = url.match(`${sourceDir}\/pages\/(.*).${suffix}$`);
    assert(ret);

    maps[ret[1]] = ret[0];
  });

  return maps;
}
const en = sourceMap('js');
// console.log(en)


module.exports = function(env) {
  return {
    entry: Object.assign(en, {
      vendors: ['moment']
    }),
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[id].[chunkhash].js',
      publicPath: '/',
      path: resolve(__dirname, 'dist')
    },
    resolve: {
      // extensions: ['.js'],
      alias: {
        assets: join(__dirname, '/src/assets'),
        components: join(__dirname, '/src/components'),
        root: join(__dirname, 'node_modules')
      },
      modules: [
        join(__dirname, 'node_modules')
      ]
    },
    modules: {
      rules: [
        
      ]
    },
    plugins: [
      //抽出公共的js单独打包
      new webpack.optimize.CommonsChunkPlugin({
        names: 'vendors',
        filename: 'src/pages/vendors.js',
        chunks: chunks,
        minChunks: chunks.length
        // minChunks: module => {
        //   return module.context && module.context.indexOf('node_modules') !== -1
        // }
      })
    ]
  }
}