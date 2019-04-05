'use strict';

/*!
 * is-var-name | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/
module.exports = function isVarName(str) {
	if (typeof str !== 'string') {
		return false;
	}

	if (str.trim() !== str) {
		return false;
	}

	try {
		new Function(str, 'var ' + str);
	} catch (_) {
		return false;
	}

	return true;
}
