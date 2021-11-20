const path = require("path"); //
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development", // prevents the file to be minified
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: `http://localhost:8080/`,
    chunkFilename: '[name].js',
  },
  devServer: {
    port: 8080,
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
        test: /\.css$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "ttf-loader",
            options: {
              name: "./public/fonts/[hash].[ext]",
            },
          },
        ],
      },
      {
        loader: "babel-loader",
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        options: { presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]] },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "users",
      filename: "remoteEntry.js",
      exposes: {
        "./Users": "./src/users/users.js",
        "./SingleUser": "./src/users/single-user.js",
        "./App": "./src/App.js"
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
  ],
};
