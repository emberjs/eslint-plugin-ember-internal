'use strict';

function isDocComment(comment) {
  return comment.value[0] === '*';
}

function hasEmptyCodeBlock(comment) {
  return comment.value.match(/(^```(js|javascript|.+\.js\s*)$)(\s)*?(```$)/gm);
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    schema: [],
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
      if (!hasEmptyCodeBlock(comment)) {
        return;
      }

      context.report({
        loc: comment.loc.start,
        message: 'Code blocks cannot be empty inside doc comments.',
      });
    });

    return {};
  },
};
