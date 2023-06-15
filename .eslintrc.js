const OFF = 0;
const WARN = 1;
const ERROR = 2;

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
    'arrow-body-style': OFF,
    camelcase: OFF,
    'consistent-return': WARN,
    'default-case': WARN,
    'guard-for-in': WARN,
    'lines-between-class-members': OFF,
    'prefer-arrow-callback': [WARN, { allowNamedFunctions: true }],
    'prefer-const': WARN,
    'prefer-destructuring': OFF,
    'prefer-rest-params': WARN,
    'no-bitwise': WARN,
    'no-cond-assign': WARN,
    'no-extra-boolean-cast': WARN,
    'no-lonely-if': WARN,
    'no-nested-ternary': WARN,
    'no-new': WARN,
    'no-multi-assign': WARN,
    'no-param-reassign': OFF,
    'no-plusplus': OFF,
    'no-prototype-builtins': WARN,
    'no-restricted-globals': WARN,
    'no-restricted-syntax': WARN,
    // Allow returning assignments when parens are used.
    'no-return-assign': [ERROR, 'except-parens'],
    'no-script-url': WARN,
    'no-shadow': OFF,
    'no-undef': ERROR,
    'no-underscore-dangle': OFF,
    // Allow unused if named 'ignore', or prefixed with `_`
    'no-unused-vars': [
      ERROR,
      {
        argsIgnorePattern: '[iI]gnored|^_.*$',
        varsIgnorePattern: '[iI]gnored|^_.*$',
      },
    ],
    'no-unused-expressions': OFF, // Leaving off until optional chaining is supported
    'no-useless-escape': WARN,
    'no-use-before-define': [ERROR, { functions: false }],
    'object-shorthand': WARN,
    radix: WARN,

    // IMPORT
    // ------------------------------------------------------------------------
    'import/no-unresolved': ERROR,
    'import/no-named-as-default-member': OFF,
    'import/extensions': OFF,
    'import/no-cycle': ERROR,
    'import/no-mutable-exports': WARN,
    'import/no-extraneous-dependencies': OFF,
    'import/prefer-default-export': OFF,

    // A11Y
    // ------------------------------------------------------------------------
    'jsx-a11y/label-has-for': OFF,
    'jsx-a11y/anchor-has-content': WARN,
    'jsx-a11y/anchor-is-valid': WARN,

    // REACT
    // ------------------------------------------------------------------------
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ERROR,
    'react/destructuring-assignment': OFF,
    'react/forbid-prop-types': [WARN, { forbid: ['array', 'object'] }],
    // Let prettier manage jsx styling
    'react/jsx-closing-tag-location': OFF,
    // Allow JSX in .js files
    'react/jsx-filename-extension': [
      ERROR,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-no-bind': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/jsx-pascal-case': OFF,
    'react/jsx-wrap-multilines': [ERROR, { prop: 'ignore' }],
    'react/no-access-state-in-setstate': ERROR,
    'react/no-array-index-key': WARN,
    // Allow html
    'react/no-danger': OFF,
    'react/no-find-dom-node': WARN,
    // Allow multiple components per file
    'react/no-multi-comp': OFF,
    'react/no-string-refs': WARN,
    'react/no-unescaped-entities': WARN,
    'react/prefer-es6-class': WARN,
    'react/prefer-stateless-function': WARN,
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'react/sort-comp': WARN,

    // TESTING LIBRARY
    // ------------------------------------------------------------------------
    'testing-library/no-wait-for-multiple-assertions': OFF,
    // Noticing too many places where fireEvent.click works and userEvent.click doesn't
    'testing-library/prefer-user-event': OFF,
  },
};
