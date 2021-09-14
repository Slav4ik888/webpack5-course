const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const outputDirectory = 'dist';
let mode = `development`;
let target = `web`;
 
if (process.env.NODE_ENV === `production`) {
  mode = `production`;
  target = `browserslist`;
}

module.exports = {
  mode,
  target,
  // entry: {
  //   main: path.resolve(__dirname, `./src/index.js`)
  // },

  // output: {
  //   path: path.resolve(__dirname, outputDirectory),
  //   filename: `index.html`,
  //   // assetModuleFilename: `img/[hash][ext][query]`
  // },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    static: 'dist',
    hot: true,
    // port: 8080,
    // open: true,
    // historyApiFallback: true,
  },
  plugins: [new MiniCssExtractPlugin()],

  devtool: `source-map`,
}