const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
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

  output: {
    path: path.resolve(__dirname, outputDirectory),
    assetModuleFilename: `images/[hash][ext][query]`
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        // parser: { // Картинки меньше этого размера он куда то девает))
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024
        //   }
        // }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: { publicPath: "" },
          },
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
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: `Webpack5-course`,
      template: './src/index.html',
      favicon: './src/images/favicon.png'
    })
  ],

  devtool: `source-map`,
}