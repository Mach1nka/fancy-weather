require('babel-polyfill');
const path = require('path');


module.exports = {
  entry: ['babel-polyfill', './modules/index.js', './node_modules/swiper/'],
  output:{
    filename: 'main.js',
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/dist'
  },
  module:{
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }]
  },
  devServer: {
    overlay:true
  }
}
