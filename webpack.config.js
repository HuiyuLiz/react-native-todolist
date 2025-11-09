const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const repoName = 'react-native-todolist'; // ✅ 你的 GitHub 專案名稱

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './index.web.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    publicPath: `/${repoName}/`, // ✅ GitHub Pages 正確路徑設定
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      'react-native-vector-icons/MaterialIcons': path.resolve(
        __dirname,
        'src/components/Icon/Icon.web.tsx',
      ),
    },
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
