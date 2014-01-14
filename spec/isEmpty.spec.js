/*global describe, it */
var expect = require('expect.js'),
  isEmpty = require('../').isEmpty;

describe('pred.isEmpty(value)', function() {
  it('is a function', function() {
    expect(isEmpty).to.be.a('function');
  });
  it('returns true if the value is empty', function() {
    expect(isEmpty(false)).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);
    expect(isEmpty(null)).to.equal(true);
    expect(isEmpty(0)).to.equal(true);
    expect(isEmpty('')).to.equal(true);
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty({})).to.equal(true);
  });
  it('returns false if the value is not empty', function() {
    expect(isEmpty(true)).to.equal(false);
    expect(isEmpty(1)).to.equal(false);
    expect(isEmpty('x')).to.equal(false);
    expect(isEmpty([0])).to.equal(false);
    expect(isEmpty({'0': 'x'})).to.equal(false);
  });
});