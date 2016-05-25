# eslint-plugin-ember-internal

Rules used internally by Ember.js


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ember-internal`:

```
$ npm install eslint-plugin-ember-internal --save-dev
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


## Supported Rules

- `require-yuidoc-access` - Ensures that every YUIDoc comment has `@public`, `@protected` or `@private` declared
- `no-const-outside-module-scope` - Prevent `const` from being used outside of the module scope (e.g. in functions)


## License

eslint-plugin-chai-expect is licensed under the [MIT License](LICENSE).
