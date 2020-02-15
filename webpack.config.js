const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getChrome = () => {
  const opsys = process.platform;
  if (opsys === 'darwin' || opsys === 'linux') {
    return 'google-chrome';
  }
  return 'chrome';
};

module.exports = env => ({
  entry: path.join(process.cwd(), 'app/index.js'),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000,
    open: getChrome(),
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      moment$: 'moment/moment.js',
    },
  },
  devtool: env.development ? 'source-map' : '',
});
