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

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                           | Description                                                                          | 🔧 |
| :----------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- | :- |
| [no-const-outside-module-scope](docs/rules/no-const-outside-module-scope.md)   | disallow `const` from being used outside of the module scope (e.g. in functions)     | 🔧 |
| [no-empty-yuidoc-code-blocks](docs/rules/no-empty-yuidoc-code-blocks.md)       | disallow empty code blocks in YUIDoc comments                                        |    |
| [require-yuidoc-access](docs/rules/require-yuidoc-access.md)                   | require that every YUIDoc comment has `@public`, `@protected` or `@private` declared |    |
| [require-yuidoc-code-block-type](docs/rules/require-yuidoc-code-block-type.md) | require that every code blocks in YUIDoc comments has a type associated              |    |

<!-- end auto-generated rules list -->

## Related

- [eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember) - public ESLint rules for Ember.js

## License

eslint-plugin-ember-internal is licensed under the [MIT License](LICENSE).
