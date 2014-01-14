/*global describe, it */
var expect = require('expect.js'),
  isArray = require('../').isArray;

describe('pred.isArray(value)', function() {
  it('is a function', function() {
    expect(isArray).to.be.a('function');
  });
  it('returns true if the value is an array', function() {
    expect(isArray([])).to.equal(true);
  });
  it('returns false if the value is not an array', function() {
    expect(isArray(true)).to.equal(false);
    expect(isArray(false)).to.equal(false);
    expect(isArray(null)).to.equal(false);
    expect(isArray(undefined)).to.equal(false);
    expect(isArray({})).to.equal(false);
    expect(isArray(arguments)).to.equal(false);
    expect(isArray({length: 0})).to.equal(false);
    expect(isArray(/./)).to.equal(false);
    expect(isArray('')).to.equal(false);
    expect(isArray(' ')).to.equal(false);
    expect(isArray('0')).to.equal(false);
    expect(isArray(0)).to.equal(false);
    expect(isArray(1)).to.equal(false);
    expect(isArray(function() {})).to.equal(false);
  });
});