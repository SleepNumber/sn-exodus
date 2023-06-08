const path = require("path");
const glob = require("glob");

function getFileName(file) {
  const start = file.lastIndexOf("/") + 1;
  const end = file.lastIndexOf(".js");
  return file.substring(start, end);
}

const scripts = {};
const entries = glob.sync(`./src/blocks/**/*.js*(x)`);
entries.forEach((file) => (scripts[getFileName(file)] = file));

module.exports = {
  entry: scripts,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
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
};
