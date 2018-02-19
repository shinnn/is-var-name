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
		// One of the High Surrogates Unicode subset
		isVarName('\uD842'),
		false,
		'should return false when the argument cannot be a variable name.'
	);

	t.equal(
		isVarName(' a\t'),
		false,
		'should return false when the argument contains whilespaces.'
	);

	t.equal(
		isVarName(''),
		false,
		'should return false when the argument is an empty string.'
	);

	t.equal(
		isVarName('a\r\n'),
		false,
		'should return false when the argument contains newlines.'
	);

	t.equal(
		isVarName('a;'),
		false,
		'should return false when the argument is not a variable but a statement.'
	);

	t.equal(
		isVarName('class'),
		false,
		'should return false when the argument is one of the reserved words.'
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
