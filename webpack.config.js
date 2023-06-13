const path = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { getRemoteFetchUrl } = require('./webpack-utils.js');

// Path for generated artifacts to go
const public_path = '/dist/';

const environments = {
  local: 'local',
  develop: 'develop',
  staging: 'staging',
  master: 'master',
};
const build_environment =
  environments[process.env.BRANCH] || environments.local;

const scripts = {};
const distNames = {};

function getFileName(file) {
  const start = file.lastIndexOf('/') + 1;
  const end = file.lastIndexOf('.');
  return {
    name: file.substring(start, end),
    ext: file.substring(end),
  };
}

const blocks = glob.sync(`./src/blocks/**/*.js*(x)`);
const utils = glob.sync(`./src/util/**/*.js*(x)`);
const entries = [...blocks, ...utils];
entries.forEach(file => {
  const { name } = getFileName(file);
  scripts[name] = `./${file}`;
  distNames[name] = file.replace('src/', '');
});

module.exports = {
  mode: 'production',

  entry: scripts,

  optimization: {
    minimize: false,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: pathData => distNames[pathData.chunk.name],
    library: {
      type: 'commonjs',
    },
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.join(__dirname, 'public'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
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
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        ],
      },

      // Videos
      {
        test: /\.(mp4|mov)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name]-[contenthash][ext]',
          publicPath:
            build_environment === environments.local
              ? public_path
              : ({ filename }) =>
                  getRemoteFetchUrl(
                    filename,
                    'video',
                    build_environment,
                    environments
                  ),
        },
      },
    ],
  },

  plugins: [
    // Clean public/dist before building
    new CleanWebpackPlugin(),
  ],

  externals: {
    react: 'React',
  },
};
