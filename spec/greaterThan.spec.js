/*global describe, it */
var expect = require('expect.js'),
  greaterThan = require('../').greaterThan;

describe('pred.greaterThan(value)', function() {
  it('is a function', function() {
    expect(greaterThan).to.be.a('function');
  });
  it('returns a function', function() {
    expect(greaterThan()).to.be.a('function');
  });
  it('returns true if the input value is greater than the predicate value', function() {
    expect(greaterThan(-1)(0)).to.equal(true);
    expect(greaterThan(0.5)(1)).to.equal(true);
    expect(greaterThan(0)(1)).to.equal(true);
  });
  it('returns false if the input value is less than or equal to the predicate value', function() {
    expect(greaterThan(0)(0)).to.equal(false);
    expect(greaterThan(0.5)(0)).to.equal(false);
    expect(greaterThan(1)(0)).to.equal(false);
  });
});