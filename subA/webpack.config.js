const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;

const port = 8082;

module.exports = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port: port,
    historyApiFallback: true,
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
      name: "sub_a",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.js",
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
