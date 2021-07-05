const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 실서비스: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx']
  },

  
  entry: {
    app: ['./client'], 
    //client.jsx에서 이미 wordRelay.jsx를 불러오고 있어서 안적어도 됨(확장자 입력안하고 resolve옵션에 저런식으로 적으면 됨)
  }, // 입력
  
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'], // browserslist
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
      },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  //추가적으로 

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },

  devServer: {
    publicPath: '/dist/',
    hot: true
  },
};