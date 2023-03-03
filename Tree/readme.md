# Tree

In computer science, a tree is a hierarchical data structure that consists of nodes connected by edges. Each node contains a value or data and can have zero or more child nodes.

A tree has a root node at the top, which is the starting point of the tree. The root node has zero or more child nodes, which in turn can have zero or more child nodes. The nodes that do not have any child nodes are called leaf nodes.

Some common types of trees include:

- Binary tree - A binary tree is a tree data structure in which each node has at most two child nodes, known as the left child and the right child.

- Binary search tree - A binary search tree is a binary tree in which the value of each node is greater than or equal to the values in its left subtree and less than or equal to the values in its right subtree.

- AVL tree - An AVL tree is a self-balancing binary search tree in which the heights of the two child subtrees of any node differ by at most one.

- B-tree - A B-tree is a tree data structure in which each node can have more than two children and is used to store large amounts of data on disk or other external storage devices.

- Trees are used in various applications such as file systems, computer networks, decision trees, and game trees. They provide efficient search, insertion, and deletion operations, making them a popular data structure in computer science.

## Binary Tree

The binary tree is a hierarchical structure where the nodes are arranged in levels, with the root node at the top level and the leaf nodes at the bottom level. Each node in the tree can have zero, one, or two children nodes.

The binary tree has several useful properties that make it a popular data structure for many applications. For example, it can be used to efficiently store and retrieve data, as well as to perform various algorithms such as traversal, search, and sorting.

There are different types of binary trees, such as balanced and unbalanced binary trees, complete binary trees, full binary trees, and perfect binary trees. The type of binary tree chosen depends on the specific application and the requirements of the data being stored.

## Binary Search Tree

In computer science, binary search trees (BST), sometimes called ordered or sorted binary trees, are a particular type of container: data structures that store "items" (such as numbers, names etc.) in memory. They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).

Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees. On average, this means that each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables.

A binary search tree of size 9 and depth 3, with 8 at the root. The leaves are not drawn.
