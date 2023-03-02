class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        const removedPair = this.table[index].splice(i, 1)[0];
        return removedPair[1];
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable(5);

hashTable.set("apple", 1);
hashTable.set("banana", 2);
hashTable.set("orange", 3);

console.log(hashTable.table);

console.log(hashTable.get("apple")); // Output: 1
console.log(hashTable.get("banana")); // Output: 2
console.log(hashTable.get("orange")); // Output: 3
console.log(hashTable.get("grape")); // Output: undefined

console.log(hashTable.remove("banana")); // Output: 2
console.log(hashTable.get("banana")); // Output: undefined
