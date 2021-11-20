const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const port = 8081;

module.exports = {
  mode: "development", // prevents the file to be minified
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: `http://localhost:${port}/`,
    chunkFilename: '[name].js',
  },
  devServer: {
    port: port,
    historyApiFallback: true,
    // static: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
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
      name: "host",
      remotes: {
        footer: "footer@http://localhost:8082/remoteEntry.js",
        users: "users@http://localhost:8080/remoteEntry.js",
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
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
