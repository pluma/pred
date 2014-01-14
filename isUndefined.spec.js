/*global describe, it */
var expect = require('expect.js'),
  isUndefined = require('../').isUndefined;

describe('pred.isUndefined(value)', function() {
  it('is a function', function() {
    expect(isUndefined).to.be.a('function');
  });
  it('returns true if the value is undefined', function() {
    expect(isUndefined(undefined)).to.equal(true);
  });
  it('returns false if the value is not undefined', function() {
    expect(isUndefined(true)).to.equal(false);
    expect(isUndefined(false)).to.equal(false);
    expect(isUndefined(null)).to.equal(false);
    expect(isUndefined({})).to.equal(false);
    expect(isUndefined([])).to.equal(false);
    expect(isUndefined(/./)).to.equal(false);
    expect(isUndefined('')).to.equal(false);
    expect(isUndefined(' ')).to.equal(false);
    expect(isUndefined('0')).to.equal(false);
    expect(isUndefined(0)).to.equal(false);
    expect(isUndefined(1)).to.equal(false);
    expect(isUndefined(function() {})).to.equal(false);
  });
});