module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    amd: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    // "prettier/prettier": "error",
    "react/prop-types": ["off"],
  },
};
