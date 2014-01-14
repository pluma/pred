/*global describe, it */
var expect = require('expect.js'),
  isNaN_ = require('../').isNaN;

describe('pred.isNaN(value)', function() {
  it('is a function', function() {
    expect(isNaN_).to.be.a('function');
  });
  it('returns true if the value is NaN', function() {
    expect(isNaN_(NaN)).to.equal(true);
  });
  it('returns false if the value is not NaN', function() {
    expect(isNaN_(true)).to.equal(false);
    expect(isNaN_(false)).to.equal(false);
    expect(isNaN_(null)).to.equal(false);
    expect(isNaN_(undefined)).to.equal(false);
    expect(isNaN_({})).to.equal(false);
    expect(isNaN_([])).to.equal(false);
    expect(isNaN_(/./)).to.equal(false);
    expect(isNaN_('')).to.equal(false);
    expect(isNaN_(' ')).to.equal(false);
    expect(isNaN_('0')).to.equal(false);
    expect(isNaN_(0)).to.equal(false);
    expect(isNaN_(1)).to.equal(false);
    expect(isNaN_(function() {})).to.equal(false);
  });
});