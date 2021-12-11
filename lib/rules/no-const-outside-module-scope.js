'use strict';

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      VariableDeclaration: function (node) {
        if (node.kind !== 'const') {
          return;
        }

        if (node.parent && node.parent.type === 'Program') {
          // Declaration is in root of module.
          return;
        }

        if (
          node.parent &&
          node.parent.type === 'ExportNamedDeclaration' &&
          node.parent.parent &&
          node.parent.parent.type === 'Program'
        ) {
          // Declaration is a `export const foo = 'asdf'` in root of the module.
          return;
        }

        context.report({
          node: node,
          message: '`const` should only be used in module scope (not inside functions/blocks).',
          fix(fixer) {
            // Get node's text content
            let nodeSourceCode = context.getSourceCode();
            let nodeText = nodeSourceCode.getText(node);

            // Transform the `const` to a `let` declaration
            let fixed = nodeText.replace('const', 'let');

            // // Apply and return the fix
            return fixer.replaceText(node, fixed);
          },
        });
      },
    };
  },
};
