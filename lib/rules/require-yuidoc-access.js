'use strict';

function isDocComment(comment) {
  return comment.value[0] === '*';
}

function isModuleOnlyComment(comment) {
  return comment.value.match(/^\*\r?\n\s*@module.+\r?\n(?:\s*@submodule.+\r?\n)?$/);
}

function includesAccessDeclaration(comment) {
  return comment.value.match(/\r?\n\s*(@private|@public|@protected)\s/);
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    schema: [],
    docs: {
      description:
        'require that every YUIDoc comment has `@public`, `@protected` or `@private` declared',
      url: 'https://github.com/emberjs/eslint-plugin-ember-internal/tree/master/docs/rules/require-yuidoc-access.md',
    },
  },
  create: function (context) {
    var sourceCode = context.getSourceCode();

    sourceCode.getAllComments().forEach(function (comment) {
      if (comment.type !== 'Block') {
        return;
      }
      if (!isDocComment(comment)) {
        return;
      }
      if (isModuleOnlyComment(comment)) {
        return;
      }
      if (includesAccessDeclaration(comment)) {
        return;
      }

      context.report({
        loc: comment.loc.start,
        message:
          'Access declaration missing, you must supply `@public`, `@private`, or `@protected` for doc comments.',
      });
    });

    return {};
  },
};
