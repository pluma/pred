/*global describe, it */
var expect = require('expect.js'),
  isBoolean = require('../').isBoolean;

describe('pred.isBoolean(value)', function() {
  it('is a function', function() {
    expect(isBoolean).to.be.a('function');
  });
  it('returns true if the value is a boolean', function() {
    expect(isBoolean(true)).to.equal(true);
    expect(isBoolean(false)).to.equal(true);
  });
  it('returns false if the value is not a boolean', function() {
    expect(isBoolean(null)).to.equal(false);
    expect(isBoolean(undefined)).to.equal(false);
    expect(isBoolean({})).to.equal(false);
    expect(isBoolean([])).to.equal(false);
    expect(isBoolean(/./)).to.equal(false);
    expect(isBoolean('')).to.equal(false);
    expect(isBoolean(' ')).to.equal(false);
    expect(isBoolean('0')).to.equal(false);
    expect(isBoolean(0)).to.equal(false);
    expect(isBoolean(1)).to.equal(false);
    expect(isBoolean(function() {})).to.equal(false);
  });
});