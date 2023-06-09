const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      type: "commonjs",
    },
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      path.join(__dirname, "public"),
      "node_modules",
    ],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },

  module: {
    rules: [
      // Javascript Loading
      {
        test: /\.(?:js|jsx|mjs|cjs)$/,
        exclude: /node_modules/,

        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Clean public/dist before building
    new CleanWebpackPlugin(),
  ],
};
