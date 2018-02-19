'use strict';

/*!
 * is-var-name | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/
function isVarName(str) {
	if (typeof str !== 'string') {
		return false;
	}

	try {
		new Function('var ' + str)();
	} catch (e) {
		return false;
	}

	return true;
}

module.exports = isVarName;
