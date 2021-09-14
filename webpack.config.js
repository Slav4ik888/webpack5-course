const path = require('path');
const outputDirectory = 'dist';
let mode = `development`;
 
if (process.env.NODE_ENV === `production`) {
  console.log('production');
  mode = `production`;
}

module.exports = {
  mode,
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    static: 'dist'
    // port: 8080,
    // open: true,
    // historyApiFallback: true,
  },
  devtool: `source-map`,
}