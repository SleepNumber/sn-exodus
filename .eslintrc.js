/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  parser: '@babel/eslint-parser',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
    // we're using vitest which has a very similar API to jest
    // (so the linting plugins work nicely), but it means we have to explicitly
    // set the jest version.
    jest: {
      version: 28,
    },
  },
  env: {
    browser: true,
    jest: true,
    jasmine: true, // Allow jasmine globals like 'fail()'
    'cypress/globals': true,
  },
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest-testing-library',
    'prettier',
  ],

  globals: {
    ENV: 'writable',
    vi: 'readable',
  },

  plugins: ['import', 'cypress'],

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  rules: {
    // CORE
    // ------------------------------------------------------------------------
    'arrow-body-style': 'off',
    camelcase: 'off',
    'consistent-return': ['warn'],
    'default-case': ['warn'],
    'guard-for-in': ['warn'],
    'lines-between-class-members': 'off',
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
    'prefer-const': ['warn'],
    'prefer-destructuring': ['off'],
    'prefer-rest-params': ['warn'],
    'no-bitwise': ['warn'],
    'no-cond-assign': ['warn'],
    'no-extra-boolean-cast': ['warn'],
    'no-lonely-if': ['warn'],
    'no-nested-ternary': ['warn'],
    'no-new': ['warn'],
    'no-multi-assign': ['warn'],
    'no-param-reassign': ['off'],
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'no-prototype-builtins': ['warn'],
    'no-restricted-globals': ['warn'],
    'no-restricted-syntax': ['warn'],
    // Allow returning assignments when parens are used.
    'no-return-assign': ['error', 'except-parens'],
    'no-script-url': ['warn'],
    'no-shadow': 'off',
    'no-undef': ['error'],
    'no-underscore-dangle': 'off',
    // Allow unused if named 'ignore', or prefixed with `_`
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '[iI]gnored|^_.*$',
        varsIgnorePattern: '[iI]gnored|^_.*$',
      },
    ],
    'no-unused-expressions': ['off'], // Leaving off until optional chaining is supported
    'no-useless-escape': ['warn'],
    'no-use-before-define': ['error', { functions: false }],
    'object-shorthand': ['warn'],
    radix: ['warn'],

    // IMPORT
    // ------------------------------------------------------------------------
    'import/no-unresolved': ['error'],
    'import/no-named-as-default-member': ['off'],
    'import/extensions': ['off'],
    'import/no-cycle': ['error'],
    'import/no-mutable-exports': ['warn'],
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],

    // A11Y
    // ------------------------------------------------------------------------
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-has-content': ['warn'],
    'jsx-a11y/anchor-is-valid': ['warn'],

    // REACT
    // ------------------------------------------------------------------------
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': ['off'],
    'react/forbid-prop-types': ['warn', { forbid: ['array', 'object'] }],
    // Let prettier manage jsx styling
    'react/jsx-closing-tag-location': 'off',
    // Allow JSX in .js files
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-no-bind': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-wrap-multilines': ['error', { prop: 'ignore' }],
    'react/no-access-state-in-setstate': ['error'],
    'react/no-array-index-key': ['warn'],
    // Allow html
    'react/no-danger': 'off',
    'react/no-find-dom-node': ['warn'],
    // Allow multiple components per file
    'react/no-multi-comp': 'off',
    'react/no-string-refs': ['warn'],
    'react/no-unescaped-entities': ['warn'],
    'react/prefer-es6-class': ['warn'],
    'react/prefer-stateless-function': ['warn'],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': ['warn'],

    // TESTING LIBRARY
    // ------------------------------------------------------------------------
    'testing-library/no-wait-for-multiple-assertions': 'off',
  },
};
