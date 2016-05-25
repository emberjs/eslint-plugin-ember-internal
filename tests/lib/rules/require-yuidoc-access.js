'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/require-yuidoc-access');
var RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run('require-yuidoc-access', rule, {
    valid: [
        '/*\nDummy method.\n\n@method foo\n@return {String}\n*/',
        '/**\n@module ember\n@submodule ember-application\n*/\n'
    ],

    invalid: [{
        code: '/**\nDummy method.\n\n@method foo\n@return {String}\n*/',
        errors: [{ message: 'Access declaration missing, you must supply `@public`, `@private`, or `@protected` for doc comments.' }]
    }]
});
