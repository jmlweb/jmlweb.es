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
    'react/no-danger': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
