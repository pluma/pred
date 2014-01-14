/*global describe, it */
var expect = require('expect.js'),
  deepEquals = require('../').deepEquals;

describe('pred.deepEquals(value)', function() {
  it('is a function', function() {
    expect(deepEquals).to.be.a('function');
  });
  it('returns a function', function() {
    expect(deepEquals()).to.be.a('function');
  });
  it('returns true if the values match', function() {
    expect(deepEquals({})([])).to.equal(true);
    expect(deepEquals({})(/./)).to.equal(true);
    expect(deepEquals({a: [0, 1, {b: 2}]})({a: [0, 1, {b: 2}]})).to.equal(true);
  });
  it('returns false if the values do not match', function() {
    expect(deepEquals({})(undefined)).to.equal(false);
    expect(deepEquals({})({a: 1})).to.equal(false);
    expect(deepEquals({b: 1})({a: 1})).to.equal(false);
  });
});