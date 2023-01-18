const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash].js',
    clean: true,
  },
  mode: 'production',
  target: 'web',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, './node_modules/')
      },{
        test: /\.(glb|gltf)$/i,
        use: 'file-loader',
        exclude: path.resolve(__dirname, './node_modules/')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Donut ThreeJs",
    }),
  ],
}
