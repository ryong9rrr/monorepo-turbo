/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/storybook.js', '@repo/eslint-config/react.js'],
  ignorePatterns: ['storybook-static'],
};
