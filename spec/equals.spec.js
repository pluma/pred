/*global describe, it */
var expect = require('expect.js'),
  equals = require('../').equals;

describe('pred.equals(value)', function() {
  it('is a function', function() {
    expect(equals).to.be.a('function');
  });
  it('returns a function', function() {
    expect(equals()).to.be.a('function');
  });
  it('returns true if the values are identical', function() {
    var x = {};
    expect(equals(x)(x)).to.equal(true);
    expect(equals(false)(false)).to.equal(true);
    expect(equals(true)(true)).to.equal(true);
    expect(equals(0)(0)).to.equal(true);
    expect(equals(1)(1)).to.equal(true);
    expect(equals('')('')).to.equal(true);
    expect(equals('x')('x')).to.equal(true);
    expect(equals(NaN)(NaN)).to.equal(true);
  });
  it('returns false if the values are not identical', function() {
    expect(equals({})({})).to.equal(false);
    expect(equals([])([])).to.equal(false);
    expect(equals(/./)(/./)).to.equal(false);
    expect(equals(false)(true)).to.equal(false);
    expect(equals(0)(1)).to.equal(false);
    expect(equals('')('x')).to.equal(false);
  });
});