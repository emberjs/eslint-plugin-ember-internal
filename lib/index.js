'use strict';

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  rules: requireIndex(`${__dirname}/rules`),
};
