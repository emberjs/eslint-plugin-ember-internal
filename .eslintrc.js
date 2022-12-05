module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es2020: true,
    node: true,
  },
  rules: {
    'eslint-plugin/prefer-message-ids': 'off',
    'eslint-plugin/require-meta-docs-description': 'error',
    'eslint-plugin/require-meta-docs-url': [
      'error',
      {
        pattern:
          'https://github.com/emberjs/eslint-plugin-ember-internal/tree/master/docs/rules/{{name}}.md',
      },
    ],
  },
};
