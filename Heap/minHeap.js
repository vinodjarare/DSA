class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }

    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  delete(item) {
    const index = this.heap.indexOf(item);
    if (index === -1) {
      return false;
    }

    const lastIndex = this.heap.length - 1;
    if (index !== lastIndex) {
      this.heap[index] = this.heap[lastIndex];
      this.heap.pop();
      this.heapifyDown(index);
      this.heapifyUp(index);
    } else {
      this.heap.pop();
    }

    return true;
  }

  findMin() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown(index = 0) {
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}

const heap = new MinHeap();
heap.add(5);
heap.add(3);
heap.add(7);
heap.add(1);
console.log(heap.heap); // [1, 3, 7, 5]

// Delete a value from the heap
heap.delete(7);
console.log(heap.heap); // [1, 3, 5]

// Find the minimum value in the heap
const min = heap.findMin();
console.log(min); // 1
