/*! pred 0.2.1 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */
var slice = Function.prototype.call.bind(Array.prototype.slice);

function eq(target, val) {
  return Number.isNaN(target) ? Number.isNaN(val) : val === target;
}

exports.truthy = function truthy(val) {
  return !!val;
};

exports.falsey = function falsey(val) {
  return !val;
};

exports.not = function not(predicate) {
  return function not(val) {
    return !predicate(val);
  };
};

exports.any = function any() {
  var predicates = slice(arguments, 0);
  return function any(val) {
    return predicates.some(function(predicate) {
      return predicate(val);
    });
  };
};

exports.all = function all() {
  var predicates = slice(arguments, 0);
  return function all(val) {
    return predicates.every(function(predicate) {
      return predicate(val);
    });
  };
};

exports.equals = function equals(target) {
  return function equals(val) {
    return eq(target, val);
  };
};

exports.deepEquals = function deepEquals(target) {
  var targetKeys = exports.isObject(target) ? Object.keys(target) : [];
  return function deepEquals(val) {
    var valKeys = exports.isObject(val) ? Object.keys(val) : [];
    if (valKeys.length !== targetKeys.length) {
      return false;
    }
    return !!target === !!val && targetKeys.every(function(key) {
      var v = val[key],
        t = target[key];
      if (exports.isObject(t)) {
        return exports.isObject(v) && exports.deepEquals(t)(v);
      }
      return v === t;
    });
  };
};

exports.allEqual = function allEqual(arr) {
  if (exports.isArrayLike(arr)) {
    for (var i = 1; i < arr.length; i++) {
      if (!eq(arr[i - 1], arr[i])) {
        return false;
      }
    }
  }
  return true;
};

exports.isEmpty = function isEmpty(val) {
  if (exports.isArrayLike(val)) {
    return val.length === 0;
  }
  if (exports.isObject(val)) {
    return Object.keys(val).length === 0;
  }
  return !val;
};

exports.inRange = function inRange(x, y) {
  return function inRange(val) {
    return val >= x && val < y;
  };
};

exports.lessThan = function lessThan(x) {
  return function lessThan(val) {
    return val < x;
  };
};

exports.greaterThan = function greaterThan(x) {
  return function greaterThan(val) {
    return val > x;
  };
};

exports.matches = function matches(re) {
  return function matches(val) {
    return re.test(val);
  };
};

exports.hasProperty = function hasProperty(name) {
  return function hasProperty(val) {
    return exports.isObject(val) && val.hasOwnProperty(name);
  };
};

exports.hasProperties = function hasProperties(props) {
  if (exports.isArray(props)) {
    return function hasProperties(val) {
      return exports.isObject(val) && props.every(function(name) {
        return val.hasOwnProperty(name);
      });
    };
  }
  return function hasProperties(val) {
    return exports.isObject(val) && Object.keys(props).every(function(name) {
      return val.hasOwnProperty(name) && val[name] === props[name];
    });
  };
};

exports.isFunction = function isFunction(val) {
  return typeof val === 'function';
};

exports.isNumber = function isNumber(val) {
  return typeof val === 'number' && !exports.isNaN(val);
};

exports.isString = function isString(val) {
  return typeof val === 'string';
};

exports.isBoolean = function isBoolean(val) {
  return typeof val === 'boolean';
};

exports.isUndefined = function isUndefined(val) {
  return typeof val === 'undefined';
};

exports.isNull = function isNull(val) {
  return typeof val === 'object' && !val;
};

exports.isObject = function isObject(val) {
  return typeof val === 'object' && !!val;
};

exports.isNaN = function isNaN(val) {
  return Number.isNaN(val);
};

exports.isArray = function isArray(val) {
  return Array.isArray(val);
};

exports.isArrayLike = function isArrayLike(val) {
  return exports.isObject(val) && typeof val.length === 'number';
};

exports.isPlainObject = function isPlainObject(val) {
  return exports.isObject(val) && Object.getPrototypeOf(val) === Object.prototype;
};

exports.isInstance = function isInstance(ctor) {
  return function isInstance(val) {
    return val instanceof ctor;
  };
};

exports.hasPrototype = function hasPrototype(proto) {
  return function hasPrototype(val) {
    return exports.isObject(proto) && proto.isPrototypeOf(val);
  };
};

exports.isPrototypeOf = function isPrototypeOf(obj) {
  return function isPrototypeOf(val) {
    return exports.isObject(val) && val.isPrototypeOf(obj);
  };
};