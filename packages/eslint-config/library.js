const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/base.js'],
  env: {
    node: true,
  },
};
