/*global describe, it */
var expect = require('expect.js'),
  hasPrototype = require('../').hasPrototype;

describe('pred.hasPrototype(obj)', function() {
  function Ctor() {}
  var obj = new Ctor();
  it('is a function', function() {
    expect(hasPrototype).to.be.a('function');
  });
  it('returns a function', function() {
    expect(hasPrototype()).to.be.a('function');
  });
  it('returns true if obj is a prototype of the value', function() {
    expect(hasPrototype(Ctor.prototype)(obj)).to.equal(true);
    expect(hasPrototype(Ctor.prototype)(Object.create(obj))).to.equal(true);
  });
  it('returns false if obj is not a prototype of the value', function() {
    expect(hasPrototype({})(obj)).to.equal(false);
    expect(hasPrototype(null)(obj)).to.equal(false);
    expect(hasPrototype(undefined)(obj)).to.equal(false);
    expect(hasPrototype(Object.create(obj))(obj)).to.equal(false);
  });
});