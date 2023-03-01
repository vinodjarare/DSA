class MyArray {
  constructor() {
    this.items = [];
  }

  // Access an element in the array
  access(index) {
    return this.items[index];
  }

  // Insert an element into the array
  insert(index, value) {
    this.items = [
      ...this.items.slice(0, index),
      value,
      ...this.items.slice(index),
    ];
  }

  // Delete an element from the array
  delete(index) {
    this.items = [
      ...this.items.slice(0, index),
      ...this.items.slice(index + 1),
    ];
  }

  // Traverse the array and apply a callback to each element
  traverse() {
    this.items.forEach((element) => console.log(element));
  }

  // Search for an element in the array and return its index
  search(value) {
    return this.items.findIndex((item) => item === value);
  }

  // Sort the elements in the array
  sort() {
    this.items.sort();
  }

  // Merge this array with another array
  merge(otherArray) {
    return [...this.items, ...otherArray];
  }

  print() {
    console.log(this.items);
  }
}

const arr = new MyArray();

arr.insert(0, 5);
arr.insert(1, 9);
arr.insert(2, 3);
arr.insert(3, 4);
arr.print();

let accessedElement = arr.access(2);
console.log(accessedElement);

arr.delete(2);
arr.print();

let searchedValue = arr.search(9);
console.log(searchedValue);

arr.sort();
arr.print();

const newArr = arr.merge([2, 5, 6]);
console.log(newArr);

arr.traverse();
