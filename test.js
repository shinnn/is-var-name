'use strict';

const test = require('tape');
const isVarName = require('.');

test('isVarName', t => {
	t.equal(
		isVarName('a'),
		true,
		'should return true when the argument can be a variable name.'
	);

	t.equal(
		isVarName('if'),
		false,
		'should return false when the argument cannot be a variable name.'
	);

	t.equal(
		isVarName(['a']),
		false,
		'should return false when the argument is not a string.'
	);

	t.equal(
		isVarName(),
		false,
		'should return false when it takes no arguments.'
	);

	t.end();
});
