//Queue is one of the linear data structures used to store data in the memory. The queue is a linear data structure that stores data sequentially based on the First In First Out (FIFO) manner and is also known as the First Come First Served data structure. The queue has two ends, namely- rear and front.
//push-insert item
//shift-remove item
//peek-fisrt element
//clear-empty queue
//size-queue length
//isEmpty-check queue is empty

class Queue {
  constructor() {
    this.items = [];
  }

  // add element to the queue
  add(element) {
    return this.items.push(element);
  }

  //remove element from queue
  remove() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
  }

  // view the first element
  peek() {
    return this.items[0];
  }

  // check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // the size of the queue
  size() {
    return this.items.length;
  }

  // empty the stack
  clear() {
    return (this.items = []);
  }
}

const queue = new Queue();

queue.add(5);
queue.add(2);
queue.add(9);
queue.add(6);
console.log(queue.items);

queue.remove();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);
