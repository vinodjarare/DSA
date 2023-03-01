class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  remove(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head !== null) {
            this.head.prev = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          if (this.tail !== null) {
            this.tail.next = null;
          }
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.print(); // Output: 1 2 3
doublyLinkedList.remove(2);
doublyLinkedList.print(); // Output: 1 3
console.log(doublyLinkedList.isEmpty()); // Output: false
