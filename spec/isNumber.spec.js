/*global describe, it */
var expect = require('expect.js'),
  isNumber = require('../').isNumber;

describe('pred.isNumber(value)', function() {
  it('is a function', function() {
    expect(isNumber).to.be.a('function');
  });
  it('returns true if the value is a number', function() {
    expect(isNumber(0)).to.equal(true);
    expect(isNumber(1)).to.equal(true);
  });
  it('returns false if the value is not a number', function() {
    expect(isNumber(NaN)).to.equal(false);
    expect(isNumber(true)).to.equal(false);
    expect(isNumber(false)).to.equal(false);
    expect(isNumber(null)).to.equal(false);
    expect(isNumber(undefined)).to.equal(false);
    expect(isNumber({})).to.equal(false);
    expect(isNumber([])).to.equal(false);
    expect(isNumber(/./)).to.equal(false);
    expect(isNumber('')).to.equal(false);
    expect(isNumber(' ')).to.equal(false);
    expect(isNumber('0')).to.equal(false);
    expect(isNumber(function() {})).to.equal(false);
  });
});