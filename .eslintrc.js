module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-unused-vars": "error",
    radix: "error",
    eqeqeq: ["error", "smart"],
    curly: "error",
    "quote-props": "off",
    "space-before-function-paren": "off",
    "space-in-parens": ["off", "never"],
    "max-len": [
      "error",
      {
        ignoreTrailingComments: true,
        code: 130,
        ignoreRegExpLiterals: true,
      },
    ],
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "linebreak-style": "off",
    "arrow-parens": ["off", "always"],
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    "comma-dangle": "off",
    "default-case": "off",
    "eol-last": "off",
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "id-match": "error",
    "accessor-pairs": "error",
    "no-var": "error",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "off",
    "no-unused-labels": "error",
    "no-irregular-whitespace": [
      "error",
      {
        skipTemplates: true, // Turn of whitespace checking inside `` templates
      },
    ],
    "no-prototype-builtins": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
