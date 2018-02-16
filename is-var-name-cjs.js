/*!
 * is-var-name | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/

module.exports = function isVarName(str) {
  'use strict';

  if (typeof str !== 'string') {
    return false;
  }

  try {
    new Function('var ' + str)();
  } catch (e) {
    return false;
  }
  return true;
};
