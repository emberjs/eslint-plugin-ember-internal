'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: {
    'no-const-outside-module-scope': require('./rules/no-const-outside-module-scope'),
    'no-empty-yuidoc-code-blocks': require('./rules/no-empty-yuidoc-code-blocks'),
    'require-yuidoc-access': require('./rules/require-yuidoc-access'),
    'require-yuidoc-code-block-type': require('./rules/require-yuidoc-code-block-type'),
  },
};
