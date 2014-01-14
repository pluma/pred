/*global describe, it */
var expect = require('expect.js'),
  all = require('../').all;

var taut = function() {return true;};
var fals = function() {return false;};

describe('pred.all(predicates…)', function() {
  it('is a function', function() {
    expect(all).to.be.a('function');
  });
  it('returns a function', function() {
    expect(all()).to.be.a('function');
  });
  it('returns true if all predicates are met', function() {
    expect(all(taut, taut, taut)(null)).to.equal(true);
  });
  it('returns false if any predicate is not met', function() {
    expect(all(taut, taut, fals)(null)).to.equal(false);
  });
});