module.exports = {
  extends: [
    './eslints/eslint-react',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json'
  },
  root: true,
  ignorePatterns: ['.eslintrc.js'],
};
