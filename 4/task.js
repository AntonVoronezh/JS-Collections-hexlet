class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END
  
  orderBy(fn, param) {
    const compare = (a, b) => {
      if (param) {
        if(fn(a) < fn(b)) return 1;
        if(fn(a) > fn(b)) return -1;
      } else {
         if(fn(a) < fn(b)) return -1;
          if(fn(a) > fn(b)) return 1;
        }
    return 0;
    }
       this.collection = this.collection.sort(compare);
    return this;
  }
  // BEGIN (write your solution here)
  
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;
