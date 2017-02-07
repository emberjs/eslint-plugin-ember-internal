'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-empty-yuidoc-code-blocks');
var RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run('no-empty-yuidoc-code-blocks', rule, {
    valid: [
        '/**\n@module ember\n@submodule ember-application\n```js\nlet test = 5;\nconsole.log(test);\n```\n*/\n',
        '/**\n@module ember\n@submodule ember-application\n```javascript\nlet test = 5;\n```\n*/\n'
    ],

    invalid: [{
        code: '/**\nDummy method.\n```js\n```\n\n@method foo\n@return {String}\n*/',
        errors: [{ message: 'Code blocks cannot be empty inside doc comments.' }]
    }]
});
