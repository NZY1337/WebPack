const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const port = 8082;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: `http://localhost:${port}/`,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: '[name].js', //?
  },
  devServer: {
    port: port,
    historyApiFallback: true,
    // static: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "footer",
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/components/footer/footer.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: require('./package.json').dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: require('./package.json').dependencies['react-dom'],
        },
        "faker": {
          requiredVersion: require('./package.json').dependencies['faker']
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
