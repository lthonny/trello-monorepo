module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ["airbnb-base", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "max-len": ["error", { code: 150 }],
    "no-param-reassign": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
