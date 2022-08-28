const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  name: 'React17-webpack-babel-setting', // 설정 이름
  mode: 'development', // production, development // 설정 모드
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.tsx',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        //   // 리액트 바벨 설정
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    // new Dotenv({
    //   path: envPath,
    // }),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html', // 템플릿 설정
      minify: true, // 압축 설정
    }),
    new webpack.ProvidePlugin({
      // 리액트 자동 로드
      React: 'react',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  devServer: {
    // 개발 서버 설정
    static: './dist',
    port: 3000,
    hot: true, // 핫 모듈 교체(HMR) 활성화
    compress: true,
    open: true,
    historyApiFallback: true,
  },
  //   externals: {
  //     react: "React",
  //     "react-dom": "ReactDOM",
  //   },
};

// if (isDev && config.plugins) {
//   config.plugins.push(new webpack.HotModuleReplacementPlugin());
//   config.plugins.push(new ReactRefreshWebpackPlugin());
// }

module.exports = config;
