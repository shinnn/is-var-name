/*!
 * is-var-name | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-var-name
*/
export default function isVarName(str) {
	if (typeof str !== 'string') {
		return false;
	}

	if (str.trim() !== str) {
		return false;
	}

	try {
		new Function(str, 'var ' + str);
	} catch (e) {
		return false;
	}

	return true;
}
