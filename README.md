**NOTE:** This package is no longer being maintained. If you are interested in taking over as maintainer or are interested in the npm package name, get in touch by creating an issue.

# Synopsis

**pred** is a library of JavaScript predicates (functions that test their input and return a boolean).

[![stability 2 - unstable](http://b.repl.ca/v1/stability-2_--_unstable-yellow.png)](http://nodejs.org/api/documentation.html#documentation_stability_index) [![license - Unlicense](http://b.repl.ca/v1/license-Unlicense-lightgrey.png)](http://unlicense.org/) [![Flattr this](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=pluma&url=https://github.com/pluma/pred)

[![Build Status](https://travis-ci.org/pluma/pred.png?branch=master)](https://travis-ci.org/pluma/pred) [![Coverage Status](https://coveralls.io/repos/pluma/pred/badge.png?branch=master)](https://coveralls.io/r/pluma/pred?branch=master) [![Dependencies](https://david-dm.org/pluma/pred.png?theme=shields.io)](https://david-dm.org/pluma/pred)

[![NPM status](https://nodei.co/npm/pred.png?compact=true)](https://npmjs.org/package/pred)

# Install

## With NPM

```sh
npm install pred
```

## From source

```sh
git clone https://github.com/pluma/pred.git
cd pred
npm install
make test
```

# API

## Complex predicates

### all(predicates…):Function

Returns a predicate that returns `true` if all of the predicates return `true` for the given input.

### any(predicates…):Function

Returns a predicate that returns `true` if any of the predicates return `true` for the given input.

### equals(value):Function

Returns a predicate that returns `true` if the input is identical to the given value (using `===` strict equal comparison).

### deepEquals(value):Function

Returns a predicate that returns `true` if the input is equivalent to the given value.

Example:

```javascript
console.log(deepEquals({a: {b: ['c']}})({a: {b: ['c']}})); // true
```

### greaterThan(value:Number):Function

Returns a predicate that returns `true` if the input is greater than (but not equal to) the given value.

### lessThan(value:Number):Function

Returns a predicate that returns `true` if the input is less than (but not equal to) the given value.

### inRange(minValue:Number, maxValue:Number):Function

Returns a predicate that returns `true` if the input is greater than (or equal to) the given minValue but less than (but not equal to) the given maxValue.

### hasProperty(name:String):Function

Returns a predicate that returns `true` if the input is an object that has a property with the given name.

### hasProperties(names:Array):Function

Returns a predicate that returns `true` if the input is an object that has a property with each of the given names.

### hasProperties(properties:Object):Function

Returns a predicate that returns `true` if the input is an object that has a property matching the given properties (name/value mapping).

### matches(re:RegExp):Function

Returns a predicate that returns `true` if the input value matches the given regular expression.

### isInstance(Constructor:Function):Function

Returns a predicate that returns `true` if the input value is an instance of the given constructor function.

### isPrototypeOf(object):Function

Returns a predicate that returns `true` if the input value is the prototype of the given object.

### hasPrototype(proto):Function

Returns a predicate that returns `true` if the given prototype is the prototype of the input value.

## Simple predicates

### falsey(value):Boolean

Returns `true` if the input is falsey (i.e. evaluates as boolean `false`).

### truthy(value):Boolean

Returns `true` if the input is truthy (i.e. evaluates as boolean `true`).

### allEqual(value):Boolean

Returns `true` if the input is array-like and all of its items are equal, or if it is not array-like.

### isArray(value):Boolean

Returns `true` if the given value is an `Array`.

### isArrayLike(value):Boolean

Returns `true` if the given value is an `Array` or an object with a numeric `length` property.

### isBoolean(value):Boolean

Returns `true` if the given value is a `Boolean`.

### isEmpty(value):Boolean

Returns `true` if the given value is falsey, an array-like object with `length` zero or an object with no properties.

### isFunction(value):Boolean

Returns `true` if the given value is a `Function`.

### isNaN(value):Boolean

Returns `true` if the given value is `NaN`.

### isNull(value):Boolean

Returns `true` if the given value is `null`.

### isNumber(value):Boolean

Returns `true` if the given value is a number other than `NaN`.

### isObject(value):Boolean

Returns `true` if the given value is an `object` other than `null`.

### isPlainObject(value):Boolean

Returns `true` if the given value is an instance of `Object`.

### isString(value):Boolean

Returns `true` if the given value is a `string`.

### isUndefined(value):Boolean

Returns `true` if the given value is `undefined`.

# Unlicense

This is free and unencumbered public domain software. For more information, see http://unlicense.org/ or the accompanying [UNLICENSE](https://github.com/pluma/pred/blob/master/UNLICENSE) file.
