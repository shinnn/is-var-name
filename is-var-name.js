/*!
 * is-var-name | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/

window.isVarName = function isVarName(str) {
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
