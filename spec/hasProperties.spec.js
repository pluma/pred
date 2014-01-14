/*global describe, it */
var expect = require('expect.js'),
  hasProperties = require('../').hasProperties;

describe('pred.hasProperties(names:Array)', function() {
  it('is a function', function() {
    expect(hasProperties).to.be.a('function');
  });
  it('returns a function', function() {
    expect(hasProperties()).to.be.a('function');
  });
  it('returns true if the value has properties with all names', function() {
    expect(hasProperties(['foo', 'bar'])({foo: true, bar: true})).to.equal(true);
    expect(hasProperties(['foo', 'bar'])({foo: undefined, bar: false})).to.equal(true);
  });
  it('returns false if the value does not have properties with all names', function() {
    expect(hasProperties(['foo', 'bar'])({foo: true})).to.equal(false);
    expect(hasProperties(['foo', 'bar'])({bar: true})).to.equal(false);
    expect(hasProperties(['foo', 'bar'])({})).to.equal(false);
    expect(hasProperties(['foo', 'bar'])(null)).to.equal(false);
    expect(hasProperties(['foo', 'bar'])(undefined)).to.equal(false);
  });
});

describe('pred.hasProperties(props:Object)', function() {
  it('is a function', function() {
    expect(hasProperties).to.be.a('function');
  });
  it('returns a function', function() {
    expect(hasProperties()).to.be.a('function');
  });
  it('returns true if the value has matching properties', function() {
    expect(hasProperties({foo: 1, bar: 2})({foo: 1, bar: 2})).to.equal(true);
    expect(hasProperties({foo: 1, bar: 2})({foo: 1, bar: 2, qux: 3})).to.equal(true);
  });
  it('returns false if the value does not have properties with all names', function() {
    expect(hasProperties({foo: 1, bar: 2})({foo: 1, bar: true})).to.equal(false);
    expect(hasProperties({foo: 1, bar: 2})({foo: 0, bar: 2})).to.equal(false);
    expect(hasProperties({foo: 1, bar: 2})({foo: 1})).to.equal(false);
    expect(hasProperties({foo: 1, bar: 2})({})).to.equal(false);
    expect(hasProperties({foo: 1, bar: 2})(null)).to.equal(false);
    expect(hasProperties({foo: 1, bar: 2})(undefined)).to.equal(false);
  });
});