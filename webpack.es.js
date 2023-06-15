const { merge } = require('webpack-merge');
const base = require('./webpack.config.js');

const base_config = base.config;
const { distNames } = base.getEntries();

const esm_config = {
  output: {
    filename: pathData => `esm/${distNames[pathData.chunk.name]}`,
    library: { type: 'module' },
  },
  experiments: { outputModule: true },
};

module.exports = merge(base_config, esm_config);
