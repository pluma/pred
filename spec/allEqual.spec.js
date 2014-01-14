/*global describe, it */
var expect = require('expect.js'),
  allEqual = require('../').allEqual;

describe('pred.allEqual(arr)', function() {
  it('is a function', function() {
    expect(allEqual).to.be.a('function');
  });
  it('returns true if the value is not array-like', function() {
    expect(allEqual({})).to.equal(true);
    expect(allEqual(null)).to.equal(true);
    expect(allEqual(undefined)).to.equal(true);
  });
  it('returns false if the value\'s items are not equal', function() {
    expect(allEqual([0, 1])).to.equal(false);
    expect(allEqual(['a', 'b'])).to.equal(false);
    expect(allEqual([-1, NaN])).to.equal(false);
  });
  it('returns true if the value\'s items are all equal', function() {
    expect(allEqual([0, 0])).to.equal(true);
    expect(allEqual(['a', 'a'])).to.equal(true);
    expect(allEqual([NaN, NaN])).to.equal(true);
  });
});