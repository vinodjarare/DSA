class MySet {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    for (let element of firstSet) {
      unionSet.add(element);
    }
    for (let element of secondSet) {
      unionSet.add(element);
    }
    return unionSet;
  }
}

const set = new MySet();

set.add(2);
set.add(3);
set.add(2);
set.add(5);

console.log(set.items);

set.delete(3);

console.log(set.items);

let hasElement = set.has(2);

console.log(hasElement);

const values = set.values();

console.log(values);

const size = set.size();

console.log(size);

const union = set.union([2, 5, 6]);

console.log(union);
