module.exports = {
  root: true,
  globals: {
    graphql: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['jsx-a11y', 'react'],
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
