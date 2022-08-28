const path = require("path");
const webpack = require("webpack");
const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: {
    // 번들 파일(bundle)의 시작 파일(Entry)을 jsx에서 tsx로 변경
    "js/app": ["./src/App.tsx"],
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      // 첫 번째 룰
      {
        test: /\.(ts|tsx)$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },

      // 두 번째 룰
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
