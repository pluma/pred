/*global describe, it */
var expect = require('expect.js'),
  isArrayLike = require('../').isArrayLike;

describe('pred.isArrayLike(value)', function() {
  it('is a function', function() {
    expect(isArrayLike).to.be.a('function');
  });
  it('returns true if the value is array-like', function() {
    expect(isArrayLike([])).to.equal(true);
    expect(isArrayLike(arguments)).to.equal(true);
    expect(isArrayLike({length: 0})).to.equal(true);
  });
  it('returns false if the value is not array-like', function() {
    expect(isArrayLike(true)).to.equal(false);
    expect(isArrayLike(false)).to.equal(false);
    expect(isArrayLike(null)).to.equal(false);
    expect(isArrayLike(undefined)).to.equal(false);
    expect(isArrayLike({})).to.equal(false);
    expect(isArrayLike(/./)).to.equal(false);
    expect(isArrayLike('')).to.equal(false);
    expect(isArrayLike(' ')).to.equal(false);
    expect(isArrayLike('0')).to.equal(false);
    expect(isArrayLike(0)).to.equal(false);
    expect(isArrayLike(1)).to.equal(false);
    expect(isArrayLike(function() {})).to.equal(false);
  });
});