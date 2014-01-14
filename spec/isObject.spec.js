/*global describe, it */
var expect = require('expect.js'),
  isObject = require('../').isObject;

describe('pred.isObject(value)', function() {
  it('is a function', function() {
    expect(isObject).to.be.a('function');
  });
  it('returns true if the value is an object', function() {
    expect(isObject({})).to.equal(true);
    expect(isObject([])).to.equal(true);
    expect(isObject(/./)).to.equal(true);
  });
  it('returns false if the value is not an object', function() {
    expect(isObject(true)).to.equal(false);
    expect(isObject(false)).to.equal(false);
    expect(isObject(null)).to.equal(false);
    expect(isObject(undefined)).to.equal(false);
    expect(isObject('')).to.equal(false);
    expect(isObject(' ')).to.equal(false);
    expect(isObject('0')).to.equal(false);
    expect(isObject(0)).to.equal(false);
    expect(isObject(1)).to.equal(false);
    expect(isObject(function() {})).to.equal(false);
  });
});