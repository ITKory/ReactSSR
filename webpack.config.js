const path = require('path');

module.exports = {
  "mode": "production",
  devtool: "source-map",
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './index.bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader']
      }
    ]
  }
}
