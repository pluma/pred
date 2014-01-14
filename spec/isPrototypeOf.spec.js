/*global describe, it */
var expect = require('expect.js'),
  isPrototypeOf = require('../').isPrototypeOf;

describe('pred.isPrototypeOf(obj)', function() {
  function Ctor() {}
  var obj = new Ctor();
  it('is a function', function() {
    expect(isPrototypeOf).to.be.a('function');
  });
  it('returns a function', function() {
    expect(isPrototypeOf()).to.be.a('function');
  });
  it('returns true if the value is a prototype of the obj', function() {
    expect(isPrototypeOf(obj)(Ctor.prototype)).to.equal(true);
    expect(isPrototypeOf(Object.create(obj))(Ctor.prototype)).to.equal(true);
  });
  it('returns false if the value is not a prototype of the obj', function() {
    expect(isPrototypeOf(obj)({})).to.equal(false);
    expect(isPrototypeOf(obj)(null)).to.equal(false);
    expect(isPrototypeOf(obj)(undefined)).to.equal(false);
    expect(isPrototypeOf(obj)(Object.create(obj))).to.equal(false);
  });
});