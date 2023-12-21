/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/next.js'],
  parserOptions: {
    project: true,
  },
  ignorePatterns: ['jest.config.js', 'jest.setup.js'],
};
