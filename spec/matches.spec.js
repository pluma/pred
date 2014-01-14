/*global describe, it */
var expect = require('expect.js'),
  matches = require('../').matches;

describe('pred.matches(regexp)', function() {
  it('is a function', function() {
    expect(matches).to.be.a('function');
  });
  it('returns a function', function() {
    expect(matches()).to.be.a('function');
  });
  it('returns true if the input matches the given regexp', function() {
    expect(matches(/a/)('bar')).to.equal(true);
  });
  it('returns false if the input does not match the given regexp', function() {
    expect(matches(/a/)('foo')).to.equal(false);
    expect(matches(/a/)(undefined)).to.equal(false);
    expect(matches(/a/)(0)).to.equal(false);
  });
});