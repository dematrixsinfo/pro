const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',  // Output bundle
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Match both .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader',  // Use Babel loader to transpile
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Support both .js and .jsx imports without extension
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Use this template for index.html
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),  // Serve content from public folder
    port: 3000,
    open: true,  // Open browser automatically
  },
  mode: 'development',  // Development mode
};
