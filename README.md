# eslint-plugin-ember-internal

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-ember-internal.svg?style=flat)](https://npmjs.org/package/eslint-plugin-ember-internal)

Rules used internally by Ember.js

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-ember-internal`:

```sh
npm install eslint-plugin-ember-internal --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ember-internal` globally.

## Usage

Add `ember-internal` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ember-internal"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ember-internal/rule-name": 2
    }
}
```

## Rules

- [`no-const-outside-module-scope`](./docs/rules/no-const-outside-module-scope.md)
- [`no-empty-yuidoc-code-blocks`](./docs/rules/no-empty-yuidoc-code-blocks.md)
- [`require-yuidoc-access`](./docs/rules/require-yuidoc-access.md)
- [`require-yuidoc-code-block-type`](./docs/rules/require-yuidoc-code-block-type.md)

## License

eslint-plugin-ember-internal is licensed under the [MIT License](LICENSE).
