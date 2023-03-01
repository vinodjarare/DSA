class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    let newItem = { item, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (newItem.priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(newItem);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift().item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0].item;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const priority = new PriorityQueue();

priority.enqueue(56, 1);

priority.enqueue(20, 5);

console.log(priority.items);

priority.enqueue(20, 2);

console.log(priority.items);

priority.dequeue();

console.log(priority.items);

const isEmpty = priority.isEmpty();

console.log(isEmpty);

const peekElement = priority.peek();

console.log(peekElement);
