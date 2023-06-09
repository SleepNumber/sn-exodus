const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

const scripts = {};
const distNames = {};

function getFileName(file) {
  const start = file.lastIndexOf("/") + 1;
  const end = file.lastIndexOf(".");
  return {
    name: file.substring(start, end),
    ext: file.substring(end),
  };
}

const entries = glob.sync(`./src/blocks/**/*.js*(x)`);
entries.forEach((file) => {
  const { name } = getFileName(file);
  scripts[name] = `./${file}`;
  distNames[name] = file.replace("src/", "");
});

module.exports = {
  entry: scripts,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: (pathData) => distNames[pathData.chunk.name],
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
