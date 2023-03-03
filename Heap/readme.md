# Heap

Heap is a specialized tree-based data structure that satisfies the heap property. The heap property states that, for a max heap, the value of each node is less than or equal to the values of its children nodes, and for a min heap, the value of each node is greater than or equal to the values of its children nodes.

Heaps are typically implemented as arrays, with the parent-child relationship between nodes determined by the index of each element in the array. In a max heap, the root node is the largest value in the heap, while in a min heap, the root node is the smallest value in the heap.

The two main types of heaps are the max heap and the min heap. In a max heap, the largest value is always the root node, while in a min heap, the smallest value is always the root node.

The most common operations performed on heaps are insertions, deletions, and finding the maximum or minimum value. These operations typically have a time complexity of O(log n), where n is the number of elements in the heap.

Heaps are commonly used in algorithms such as heap sort, priority queues, and graph algorithms such as Dijkstra's algorithm

## Min Heap

![MinHeap](https://raw.githubusercontent.com/trekhleb/javascript-algorithms/master/src/data-structures/heap/images/min-heap.jpeg)

## Max Heap

![MaxHeap](https://raw.githubusercontent.com/trekhleb/javascript-algorithms/master/src/data-structures/heap/images/max-heap.jpeg)

![ArrayRepresentation](https://raw.githubusercontent.com/trekhleb/javascript-algorithms/master/src/data-structures/heap/images/array-representation.jpeg)
