const path = require('path');

module.exports = {
  "mode": "production",
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: './server.ssr.js',
  },
  target: 'node', // это  важно!!
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
