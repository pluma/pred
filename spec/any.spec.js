/*global describe, it */
var expect = require('expect.js'),
  any = require('../').any;

var taut = function() {return true;};
var fals = function() {return false;};

describe('pred.any(predicates…)', function() {
  it('is a function', function() {
    expect(any).to.be.a('function');
  });
  it('returns a function', function() {
    expect(any()).to.be.a('function');
  });
  it('returns true if any predicates are met', function() {
    expect(any(fals, fals, taut)(null)).to.equal(true);
  });
  it('returns false if no predicate is met', function() {
    expect(any(fals, fals, fals)(null)).to.equal(false);
  });
});