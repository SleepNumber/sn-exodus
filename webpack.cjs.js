const { merge } = require('webpack-merge');
const base = require('./webpack.config.js');
const nodeExternals = require("webpack-node-externals");

const base_config = base.config;
const { distNames } = base.getEntries();

const cjs_config = {
  output: {
    filename: pathData =>
      `cjs/${distNames[pathData.chunk.name]}`.replace(/\.jsx$/, '.js'),
    library: { type: 'commonjs' },
  },
  externals: [nodeExternals()],
};

module.exports = merge(base_config, cjs_config);
