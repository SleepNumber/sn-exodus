const { merge } = require('webpack-merge');
const base = require('./webpack.config.js');

const base_config = base.config;
const { distNames } = base.getEntries();

const cjs_config = {
  output: {
    filename: pathData => `cjs/${distNames[pathData.chunk.name]}`,
    library: { type: 'commonjs' },
  },
};

module.exports = merge(base_config, cjs_config);
