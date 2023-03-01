# Queue

A queue is a linear data structure in which elements are inserted at one end, called the rear or tail, and removed from the other end, called the front or head. It follows the First-In-First-Out (FIFO) principle, which means that the first element added to the queue will be the first one to be removed.

A queue has two primary operations: enqueue and dequeue. The enqueue operation adds an element to the rear of the queue, and the dequeue operation removes the element from the front of the queue. There is also a third operation called peek or front, which returns the front element of the queue without removing it.

Queues are often used in computer systems for various purposes, such as process scheduling, task management, and message passing. They can be implemented using arrays, linked lists, or dynamic arrays, and their efficiency depends on the implementation method and the size of the queue. The time complexity of the enqueue and dequeue operations is O(1) in most cases.

## Operations in queue

- push (unshift)-insert item
- shift-remove item
- peek-first element
- clear-empty queue
- size-queue length
- isEmpty-check queue is empty

## Priority Queue

A priority queue is a data structure that allows for efficient insertion and removal of elements based on their priority. Each element in the queue is assigned a priority value, and elements with higher priority values are given precedence over elements with lower priority values.

Priority queues are commonly used in computer algorithms and programming for applications such as task scheduling, job prioritization, and network routing. They can be implemented using various data structures, including arrays, linked lists, heaps, and binary search trees.

The basic operations on a priority queue are:

- Insertion: This operation adds a new element to the priority queue while maintaining the order of elements based on their priority.

- Removal: This operation removes the element with the highest priority from the priority queue.

- Peek: This operation returns the element with the highest priority without removing it from the priority queue.

Priority queues can be implemented as either a max-heap or a min-heap. In a max-heap, the element with the highest priority has the highest value, while in a min-heap, the element with the highest priority has the lowest value.

Overall, priority queues provide a convenient and efficient way to manage and prioritize elements in a wide range of applications.
