/*global describe, it */
var expect = require('expect.js'),
  not = require('../').not;

var taut = function() {return true;};
var fals = function() {return false;};

describe('pred.not(predicate)', function() {
  it('is a function', function() {
    expect(not).to.be.a('function');
  });
  it('returns a function', function() {
    expect(not()).to.be.a('function');
  });
  it('returns false if the predicate is met', function() {
    expect(not(taut)(null)).to.equal(false);
  });
  it('returns true if the predicate is not met', function() {
    expect(not(fals)(null)).to.equal(true);
  });
});