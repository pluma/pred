/*global describe, it */
var expect = require('expect.js'),
  isNaN = require('../').isNaN;

describe('pred.isNaN(value)', function() {
  it('is a function', function() {
    expect(isNaN).to.be.a('function');
  });
  it('returns true if the value is NaN', function() {
    expect(isNaN(NaN)).to.equal(true);
  });
  it('returns false if the value is not NaN', function() {
    expect(isNaN(true)).to.equal(false);
    expect(isNaN(false)).to.equal(false);
    expect(isNaN(null)).to.equal(false);
    expect(isNaN(undefined)).to.equal(false);
    expect(isNaN({})).to.equal(false);
    expect(isNaN([])).to.equal(false);
    expect(isNaN(/./)).to.equal(false);
    expect(isNaN('')).to.equal(false);
    expect(isNaN(' ')).to.equal(false);
    expect(isNaN('0')).to.equal(false);
    expect(isNaN(0)).to.equal(false);
    expect(isNaN(1)).to.equal(false);
    expect(isNaN(function() {})).to.equal(false);
  });
});