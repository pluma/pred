/*global describe, it */
var expect = require('expect.js'),
  lessThan = require('../').lessThan;

describe('pred.lessThan(value)', function() {
  it('is a function', function() {
    expect(lessThan).to.be.a('function');
  });
  it('returns a function', function() {
    expect(lessThan()).to.be.a('function');
  });
  it('returns true if the input value is less than the predicate value', function() {
    expect(lessThan(0)(-1)).to.equal(true);
    expect(lessThan(1)(0.5)).to.equal(true);
    expect(lessThan(1)(0)).to.equal(true);
  });
  it('returns false if the input value is greater than or equal to the predicate value', function() {
    expect(lessThan(0)(0)).to.equal(false);
    expect(lessThan(0)(0.5)).to.equal(false);
    expect(lessThan(0)(1)).to.equal(false);
  });
});