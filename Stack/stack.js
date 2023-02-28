// Stack is a very useful data structure and has a wide range of application. Stack is a linear data structure in which addition or removal of element follows a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out).
//push-insert item
//pop-remove item
//peek-last element
//clear-empty stack
//size-stack length
//isEmpty-check stack is empty

class Stack {
  constructor() {
    this.items = [];
  }

  // add element to the stack
  add(element) {
    return this.items.push(element);
  }

  // remove element from the stack
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // the size of the stack
  size() {
    return this.items.length;
  }

  // empty the stack
  clear() {
    this.items = [];
  }
}

const stack = new Stack();

stack.add(5);
stack.add(6);
stack.add(7);
stack.add(2);
console.log(stack.items);

stack.remove();
console.log(stack.items);

//check last element
console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);
