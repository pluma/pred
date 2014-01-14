/*global describe, it */
var expect = require('expect.js'),
  isString = require('../').isString;

describe('pred.isString(value)', function() {
  it('is a function', function() {
    expect(isString).to.be.a('function');
  });
  it('returns true if the value is a string', function() {
    expect(isString('')).to.equal(true);
    expect(isString(' ')).to.equal(true);
    expect(isString('0')).to.equal(true);
  });
  it('returns false if the value is not a string', function() {
    expect(isString(true)).to.equal(false);
    expect(isString(false)).to.equal(false);
    expect(isString(null)).to.equal(false);
    expect(isString(undefined)).to.equal(false);
    expect(isString({})).to.equal(false);
    expect(isString([])).to.equal(false);
    expect(isString(/./)).to.equal(false);
    expect(isString(0)).to.equal(false);
    expect(isString(1)).to.equal(false);
    expect(isString(function() {})).to.equal(false);
  });
});