/*global describe, it */
var expect = require('expect.js'),
  isNull = require('../').isNull;

describe('pred.isNull(value)', function() {
  it('is a function', function() {
    expect(isNull).to.be.a('function');
  });
  it('returns true if the value is null', function() {
    expect(isNull(null)).to.equal(true);
  });
  it('returns false if the value is not null', function() {
    expect(isNull(true)).to.equal(false);
    expect(isNull(false)).to.equal(false);
    expect(isNull(undefined)).to.equal(false);
    expect(isNull({})).to.equal(false);
    expect(isNull([])).to.equal(false);
    expect(isNull(/./)).to.equal(false);
    expect(isNull('')).to.equal(false);
    expect(isNull(' ')).to.equal(false);
    expect(isNull('0')).to.equal(false);
    expect(isNull(0)).to.equal(false);
    expect(isNull(1)).to.equal(false);
    expect(isNull(function() {})).to.equal(false);
  });
});