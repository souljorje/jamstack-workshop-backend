module.exports = {
  root: true,
  extends: ['airbnb-base'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: false,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  globals: {
    strapi: true,
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/prefer-default-export': 'off',
  },
};
