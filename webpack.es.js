const { merge } = require('webpack-merge');
const base = require('./webpack.config.js');
const nodeExternals = require("webpack-node-externals");

const base_config = base.config;
const { distNames } = base.getEntries();

const esm_config = {
  target: 'es2022',
  output: {
    filename: pathData =>
      `esm/${distNames[pathData.chunk.name]}`.replace(/\.jsx$/, '.js'),
    library: { type: 'module' },
  },
  experiments: { outputModule: true },
  externals: [nodeExternals({importType: 'module'})],
};

module.exports = merge(base_config, esm_config);
