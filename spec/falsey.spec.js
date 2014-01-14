/*global describe, it */
var expect = require('expect.js'),
  falsey = require('../').falsey;

describe('pred.falsey(value)', function() {
  it('is a function', function() {
    expect(falsey).to.be.a('function');
  });
  it('returns true if the value is falsey', function() {
    expect(falsey(false)).to.equal(true);
    expect(falsey(null)).to.equal(true);
    expect(falsey(undefined)).to.equal(true);
    expect(falsey('')).to.equal(true);
    expect(falsey(0)).to.equal(true);
  });
  it('returns false if the value is truthy', function() {
    expect(falsey(true)).to.equal(false);
    expect(falsey({})).to.equal(false);
    expect(falsey([])).to.equal(false);
    expect(falsey(' ')).to.equal(false);
    expect(falsey('0')).to.equal(false);
    expect(falsey(1)).to.equal(false);
    expect(falsey(function() {})).to.equal(false);
    expect(falsey(/./)).to.equal(false);
  });
});