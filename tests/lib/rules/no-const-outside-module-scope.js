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
    sourceType: 'module',
  },
});

ruleTester.run('no-const-outside-module-scope', rule, {
  valid: [
    'const FOOBAR = 5;',
    'export const FOOBAR = 5;',
    `
      import Controller from '@ember/controller';
      const COUNT = 5;
      export default class extends Controller {
        get count() {
          let listCount = this.module.scope ? this.list.length : COUNT;
          return listCount;
        }
      }
    `,
  ],

  invalid: [
    {
      code: '{ const FOOBAR = 5; }',
      output: '{ let FOOBAR = 5; }',
      errors: [
        { message: '`const` should only be used in module scope (not inside functions/blocks).' },
      ],
    },
    {
      code: 'function foobar() { const FOOBAR = 5; return FOOBAR; }',
      output: 'function foobar() { let FOOBAR = 5; return FOOBAR; }',
      errors: [
        { message: '`const` should only be used in module scope (not inside functions/blocks).' },
      ],
    },
    {
      code: `
      import Controller from '@ember/controller';
      export default class extends Controller {
        get isControllerScope() {
          const { scope } = this
          return Boolean(scope)
        }
      }
    `,
      output: `
      import Controller from '@ember/controller';
      export default class extends Controller {
        get isControllerScope() {
          let { scope } = this
          return Boolean(scope)
        }
      }
    `,
      errors: [
        { message: '`const` should only be used in module scope (not inside functions/blocks).' },
      ],
    },
  ],
});
