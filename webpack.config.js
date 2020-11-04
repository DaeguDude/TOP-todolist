const path = require('path');

module.exports = {
  entry: './CSSTest/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      './CSSTest/background.jpg': path.resolve(
        __dirname,
        './CSSTest/background.jpg'
      ),
    },
  },
};

