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
    publicPath: `http://localhost:8080/`

  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8080,
    historyApiFallback: true,
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
          "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
          },
        },
      ],
    }),
  ],
};


/*
   This section is for everyone who ran into this problem in development using webpack-dev-server..
   Just as above, what we need to do it tell Webpack Dev Server to redirect all server requests to /index.html. T
   There are just two properties in your webpack config you need to set to do this, publicPath and historyApiFallback.

    - publicPath: '/' - allows you to specify the base path for all the assets within your application.
    - historyAPIFallback:boolean - will redirect 404s to /index.html.

* */