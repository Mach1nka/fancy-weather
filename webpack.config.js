require('babel-polyfill');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, "./img"),
};

module.exports = {
  entry: ['babel-polyfill', './modules/index.js'],
  output:{
    filename: 'main.js',
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/dist'
  },
  module:{
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    },
    {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './fonts/',
              outputPath: './fonts/'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
       }
     }
   ]
  },
  devServer: {
    overlay:true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: PATHS.src, to: 'img' },
      ],
    }),
  ],
}
