module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "rules": {
    "prefer-template": 2,
    "prefer-arrow-callback": 2,
    "no-unused-vars": [2, { "argsIgnorePattern": "^_*$" }],
    "no-console": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/newline-after-import": 0,
    "react/require-default-props": 0
  },
  "parser": "babel-eslint"
};
