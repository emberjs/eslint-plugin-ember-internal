'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-const-outside-module-scope');
var RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
});

ruleTester.run('no-const-outside-module-scope', rule, {
  valid: [
    'const FOOBAR = 5;',
    'export const FOOBAR = 5;'
  ],

  invalid: [{
    code: '{ const FOOBAR = 5; }',
    errors: [{ message: '`const` should only be used in module scope (not inside functions/blocks).' }]
  }, {
    code: 'function foobar() { const FOOBAR = 5; return FOOBAR; }',
    errors: [{ message: '`const` should only be used in module scope (not inside functions/blocks).' }]
  }]
});
