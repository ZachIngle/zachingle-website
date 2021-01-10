module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    commonjs: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-plusplus': 0,
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-console': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'object-curly-newline': 0,
  },
};
