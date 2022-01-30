module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  // plugins: ["react"],
  rules: {
    "prettier/prettier": "error"
  }
};
