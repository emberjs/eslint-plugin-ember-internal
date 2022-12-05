'use strict';

var lineColumn = require('line-column');

function isDocComment(comment) {
  return comment.value[0] === '*';
}

function getEmptyCodeBlocks(comment) {
  var empty = [];
  var regex = /(?:```)(\S*)(?:[\s\S]+?)(?:```)/gm;
  var match;
  var col = lineColumn(comment.value);

  while ((match = regex.exec(comment.value)) !== null) {
    if (match && match[1] === '') {
      var loc = col.fromIndex(match.index);
      empty.push({ match: match, loc: loc });
    }
  }
  return empty;
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    schema: [],
    docs: {
      description: 'require that every code blocks in YUIDoc comments has a type associated',
      url: 'https://github.com/emberjs/eslint-plugin-ember-internal/tree/master/docs/rules/require-yuidoc-code-block-type.md',
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
      var emptyCodeBlocks = getEmptyCodeBlocks(comment);
      if (!emptyCodeBlocks || !emptyCodeBlocks.length) {
        return;
      }

      emptyCodeBlocks.forEach(function (block) {
        context.report({
          loc: block.loc,
          message: 'Code blocks require a type, like `javascript`, for doc comments.',
        });
      });
    });

    return {};
  },
};
