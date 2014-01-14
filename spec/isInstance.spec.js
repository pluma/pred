/*global describe, it */
var expect = require('expect.js'),
  isInstance = require('../').isInstance;

describe('pred.isInstance(Constructor)', function() {
  function Ctor() {};
  it('is a function', function() {
    expect(isInstance).to.be.a('function');
  });
  it('returns a function', function() {
    expect(isInstance()).to.be.a('function');
  });
  it('returns true if the value is an instance of the Constructor', function() {
    expect(isInstance(Ctor)(new Ctor())).to.equal(true);
    expect(isInstance(Ctor)(Object.create(Ctor.prototype))).to.equal(true);
  });
  it('returns false if the value is not an instance of the Constructor', function() {
    expect(isInstance(Ctor)({})).to.equal(false);
    expect(isInstance(Ctor)(null)).to.equal(false);
  });
});