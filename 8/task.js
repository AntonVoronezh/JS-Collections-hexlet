class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
where(...args) {
  const mapOfArgs = args.map(arg => {
    let out;
    if (typeof arg === 'function') {
      out = coll => coll.filter(arg);
    } else if (typeof arg === 'object') {
    const keysFromArg = Object.keys(arg);
    out = coll => coll.filter(element => keysFromArg.every(elem => element[elem] === arg[elem]));
    }
    return out;
  });

  return this.build(mapOfArgs);
}


  // END

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
