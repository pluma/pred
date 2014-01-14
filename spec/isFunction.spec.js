/*global describe, it */
var expect = require('expect.js'),
  isFunction = require('../').isFunction;

describe('pred.isFunction(value)', function() {
  it('is a function', function() {
    expect(isFunction).to.be.a('function');
  });
  it('returns true if the value is a function', function() {
    expect(isFunction(function() {})).to.equal(true);
  });
  it('returns false if the value is not a function', function() {
    expect(isFunction(true)).to.equal(false);
    expect(isFunction(false)).to.equal(false);
    expect(isFunction(null)).to.equal(false);
    expect(isFunction(undefined)).to.equal(false);
    expect(isFunction({})).to.equal(false);
    expect(isFunction([])).to.equal(false);
    expect(isFunction(/./)).to.equal(false);
    expect(isFunction('')).to.equal(false);
    expect(isFunction(' ')).to.equal(false);
    expect(isFunction('0')).to.equal(false);
    expect(isFunction(0)).to.equal(false);
    expect(isFunction(1)).to.equal(false);
  });
});