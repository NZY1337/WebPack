const path = require("path"); //
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development", // prevents the file to be minified
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8080,
    // allowedHosts: true,
  },
  module: {
    rules: [
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
        "./App": "./src/App",
        "./SingleUser": "./src/users/single-user.js",
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
  ],
};
