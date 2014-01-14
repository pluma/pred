/*global describe, it */
var expect = require('expect.js'),
  isPlainObject = require('../').isPlainObject;

describe('pred.isPlainObject(value)', function() {
  it('is a function', function() {
    expect(isPlainObject).to.be.a('function');
  });
  it('returns true if the value is a plain object', function() {
    expect(isPlainObject({})).to.equal(true);
  });
  it('returns false if the value is not a plain object', function() {
    expect(isPlainObject(true)).to.equal(false);
    expect(isPlainObject(false)).to.equal(false);
    expect(isPlainObject(null)).to.equal(false);
    expect(isPlainObject(undefined)).to.equal(false);
    expect(isPlainObject([])).to.equal(false);
    expect(isPlainObject(/./)).to.equal(false);
    expect(isPlainObject('')).to.equal(false);
    expect(isPlainObject(' ')).to.equal(false);
    expect(isPlainObject('0')).to.equal(false);
    expect(isPlainObject(0)).to.equal(false);
    expect(isPlainObject(1)).to.equal(false);
    expect(isPlainObject(function() {})).to.equal(false);
    expect(isPlainObject(Object.create(null))).to.equal(false);
    expect(isPlainObject(Object.create({}))).to.equal(false);
  });
});