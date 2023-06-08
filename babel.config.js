const baseConfig = {
  presets: [
    ["@babel/preset-react"],
    // See https://babeljs.io/docs/en/babel-preset-env for docs
    [
      "@babel/preset-env",
      {
        // Adds core-js polyfills as needed automatically
        // See https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage
        useBuiltIns: "usage",
        corejs: { version: "3.22", proposals: true },
        loose: true,
        modules: "auto",
      },
    ],
  ],

  plugins: ["add-react-displayname"],
};

module.exports = (api) => {
  // For local development
  if (api.env("development")) {
    return {
      ...baseConfig,
      plugins: [...baseConfig.plugins, "react-refresh/babel"],
    };
  }

  // For Jest tests
  // Change preset-env for node instead of browser
  if (api.env("test")) {
    return {
      ...baseConfig,
      presets: [
        ["@babel/preset-env", { targets: { node: "18" } }],
        ["@babel/preset-react"],
      ],
    };
  }

  return baseConfig;
};
