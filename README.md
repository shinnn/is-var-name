# is-var-name

[![NPM version](https://badge.fury.io/js/is-var-name.svg)](https://www.npmjs.org/package/is-var-name)
[![Bower version](https://badge.fury.io/bo/is-var-name.svg)](https://github.com/shinnn/is-var-name/releases)
[![Build Status](https://travis-ci.org/shinnn/is-var-name.svg?branch=master)](https://travis-ci.org/shinnn/is-var-name)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-var-name.svg)](https://coveralls.io/r/shinnn/is-var-name)
[![devDependency Status](https://david-dm.org/shinnn/is-var-name/dev-status.svg)](https://david-dm.org/shinnn/is-var-name#info=devDependencies)

Check if a string can be used as a [JavaScript variable name](http://es5.github.io/x7.html#x7.6)

```javascript
isVarName('foo'); //=> true
isVarName('f o o'); //=> false
```

## Installation

### Package managers

#### [npm](https://www.npmjs.org/)

```sh
npm install is-var-name
```

#### [bower](http://bower.io/)

```sh
bower install is-var-name
```

#### [Duo](http://duojs.org/)

```javascript
var isVarName = require('shinnn/is-var-name');
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/is-var-name/master/is-var-name.js)

## API

### isVarName(*string*)

*string*: `String`  
Return: `Boolean`

It returns `true` if [the string can be used as a valid JavaScript identifier name](https://mathiasbynens.be/notes/javascript-identifiers). If not, or the argument is not a string, it returns `false`.

```javascript
isVarName('______________'); //=> true
isVarName('å'); //=> true

isVarName('123'); //=> false
isVarName('↑→↓←'); //=> false

isVarName(['foo']); //=> false
isVarName(); //=> false
```

## Another solution

Instead of this module, you can use [the regular expression that matches valid variable names](http://stackoverflow.com/questions/1661197/valid-characters-for-javascript-variable-names/9337047#9337047).

### Pros

This module uses [`Function` constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function) but regular expression doesn't.

According to [the ESLint documentation](http://eslint.org/docs/rules/no-new-func.html), `new Function()` is:

> considered by many to be a bad practice due to the difficult in debugging and reading these types of functions.

### Cons

Since the regular expression is too long (11,236 characters), it increases the file size of your project.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
