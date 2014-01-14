/*global describe, it */
var expect = require('expect.js'),
  truthy = require('../').truthy;

describe('pred.truthy(value)', function() {
  it('is a function', function() {
    expect(truthy).to.be.a('function');
  });
  it('returns true if the value is truthy', function() {
    expect(truthy(true)).to.equal(true);
    expect(truthy({})).to.equal(true);
    expect(truthy([])).to.equal(true);
    expect(truthy(' ')).to.equal(true);
    expect(truthy('0')).to.equal(true);
    expect(truthy(1)).to.equal(true);
    expect(truthy(function() {})).to.equal(true);
    expect(truthy(/./)).to.equal(true);
  });
  it('returns false if the value is falsey', function() {
    expect(truthy(false)).to.equal(false);
    expect(truthy(null)).to.equal(false);
    expect(truthy(undefined)).to.equal(false);
    expect(truthy('')).to.equal(false);
    expect(truthy(0)).to.equal(false);
  });
});