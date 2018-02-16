'use strict';

var test = require('tape');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(5);

    t.equal(main.name, 'isVarName', 'should have a function name.');

    t.strictEqual(
      main('a'), true,
      'should return true when the argument can be a variable name.'
    );

    t.strictEqual(
      main('if'), false,
      'should return false when the argument cannot be a variable name.'
    );

    t.strictEqual(
      main(['a']), false,
      'should return false when the argument is not a string.'
    );

    t.strictEqual(
      main(), false,
      'should return false when it takes no arguments.'
    );
  });
}

runTest('require(\'is-var-name\')', require('./'));
