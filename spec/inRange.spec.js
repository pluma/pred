/*global describe, it */
var expect = require('expect.js'),
  inRange = require('../').inRange;

describe('pred.inRange(minValue, maxValue)', function() {
  it('is a function', function() {
    expect(inRange).to.be.a('function');
  });
  it('returns a function', function() {
    expect(inRange()).to.be.a('function');
  });
  it('returns true if the input value is greater than or equal to the minValue', function() {
    expect(inRange(-1, 100)(0)).to.equal(true);
    expect(inRange(0.5, 100)(1)).to.equal(true);
    expect(inRange(0, 100)(0)).to.equal(true);
    expect(inRange(0, 100)(1)).to.equal(true);
  });
  it('returns true if the input value is less than the maxValue', function() {
    expect(inRange(0, 100)(99)).to.equal(true);
    expect(inRange(0, 100)(99.5)).to.equal(true);
  });
  it('returns false if the input value is less than the minValue', function() {
    expect(inRange(0, 100)(-1)).to.equal(false);
    expect(inRange(0.5, 100)(0)).to.equal(false);
  });
  it('returns false if the input value is greater than or equal to the maxValue', function() {
    expect(inRange(0, 100)(100)).to.equal(false);
    expect(inRange(0, 100)(100.5)).to.equal(false);
  });
});