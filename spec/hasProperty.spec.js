/*global describe, it */
var expect = require('expect.js'),
  hasProperty = require('../').hasProperty;

describe('pred.hasProperty(name)', function() {
  it('is a function', function() {
    expect(hasProperty).to.be.a('function');
  });
  it('returns a function', function() {
    expect(hasProperty()).to.be.a('function');
  });
  it('returns true if the value has a property with that name', function() {
    expect(hasProperty('foo')({foo: true})).to.equal(true);
    expect(hasProperty('foo')({foo: undefined})).to.equal(true);
  });
  it('returns false if the value does not have a property with that name', function() {
    expect(hasProperty('foo')({})).to.equal(false);
    expect(hasProperty('foo')(null)).to.equal(false);
    expect(hasProperty('foo')(undefined)).to.equal(false);
  });
});