'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/require-yuidoc-code-block-type');
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run('require-yuidoc-code-block-type', rule, {
  valid: [
    '/*\nDummy method.\n```js\ntest\n```\n\n@method foo\n@return {String}\n*/',
    '/**\n@module ember\n@submodule ember-application\n*/\n',
  ],

  invalid: [
    {
      code:
        '/**\nDummy method.\n```js\ntest1\n```\n\nhello\n\n```\ntest2\n```\nhello2\n\n```\ntest3\n```\n\n@method foo\n@return {String}\n*/',
      errors: [
        { message: 'Code blocks require a type, like `javascript`, for doc comments.' },
        { message: 'Code blocks require a type, like `javascript`, for doc comments.' },
      ],
    },
    {
      code:
        '/**\nDummy method.\n```app/users/route.js\ntest1\n```\n\nhello\n\n```\ntest2\n```\nhello2\n\n@method foo\n@return {String}\n*/',
      errors: [{ message: 'Code blocks require a type, like `javascript`, for doc comments.' }],
    },
    {
      code: '/**\nDummy method.\n```\ntest\n```\n\n@method foo\n@return {String}\n*/',
      errors: [{ message: 'Code blocks require a type, like `javascript`, for doc comments.' }],
    },
  ],
});
