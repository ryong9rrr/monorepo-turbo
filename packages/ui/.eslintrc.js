/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/storybook.js', '@repo/eslint-config/react-internal.js'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['storybook-static'],
  rules: {
    'unicorn/filename-case': 'off',
  },
};
