/*
  Write a function that creates custom set object. Function
  accepts single optional parameter (array) do define initial
  set content.
  Set should have add(), has(), delete(), forEach(), clear() methods
  and size property. Should not use es6 objects Set, WeakSet,
  but work in similar way. Set should preserve addition order
  in forEach() method.
  mySet = createSet(['a', 'b', 'c'])
*/
export function createSet(arr) {
  
  const Set = function(arr) {
    this.keys = [];
    this.values = this.keys;
    if (arr) {
      arr.forEach((val) => {
        this.add(val);
      });
    }
  };
  
  Set.prototype.add = function(item) {
    const key = this.keys.indexOf(item);
    if (key !== -1) this.keys[key] = item;
    else this.keys.push(item);
    return this;
  };
  
  
  Set.prototype.has = function(item) {
    const key = this.keys.indexOf(item);
    if (key !== -1) return true;
    return false;
  };
  
  Set.prototype.delete = function(item) {
    const key = this.keys.indexOf(item);
    if (key !== -1) {
      this.keys.splice(key,1);
      return true;
    }
    return false;
  };
  
  Set.prototype.forEach = function(fn, thisArg = null) {
    return this.keys.forEach((value1, value2, array = this.keys) => {
      return fn(value1, this.values[value2]);
    }, thisArg);
  };
  
  Set.prototype.clear = function() {
    this.keys = [];
    return undefined;
  };
  
  Object.defineProperty(Set.prototype, "size", {
    get: function () {
      return this.keys.length;
    }
  });
  
  return new Set(arr);
}


/*
  Write a function that creates custom map object. Function
  accepts single optional parameter (array) do define initial
  map content.
  Map should have set(), get(), has(), delete(), forEach(), clear()
  methods and size property. Should not use es6 objects Map, WeakMap,
  but work in similar way. Map should preserve addition order
  in forEach() method.
  myMap = createMap([['a', 1], ['b', 2], ['c', 3]])
*/

function CustMap(arr) {
  this.entries = [];
  arr.forEach(el => this.set(...el));
}

CustMap.prototype = {
  get size() {
    return this.entries.length;
  },

  get(key) {
    return this.entries.find(el => el[0] === key || (Number.isNaN(key) && Number.isNaN(el[0])));
  },

  has(key) {
    return !!this.get(key);
  },

  set(key, value) {
    if (!this.has(key)) {
      this.entries.push([key, value]);
    } else {
      const updateElement = this.get(key);
      updateElement[1] = value;
    }
    return this;
  },

  delete(key) {
    if (this.has(key)) {
      this.entries = this.entries.filter(el => !((Number.isNaN(key) && Number.isNaN(el[0])) || el[0] === key));
      return true;
    }
    return false;
  },

  forEach(callback, thisArg = this) {
    thisArg.entries.forEach((el, index, array) => {
      const [key, value] = el;
      callback(value, key, array);
    });
  },

  clear() {
    this.entries = [];
  },
};

export function createMap(arr = []) {
  return new CustMap(arr);
}

export default {
  createSet,
  createMap
};
