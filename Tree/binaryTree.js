class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      this._insertNode(node, this.root);
    }
  }

  _insertNode(node, currentNode) {
    if (node.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
      } else {
        this._insertNode(node, currentNode.left);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = node;
      } else {
        this._insertNode(node, currentNode.right);
      }
    }
  }

  search(value) {
    return this._searchNode(value, this.root);
  }

  _searchNode(value, currentNode) {
    if (currentNode === null) {
      return null;
    } else if (value === currentNode.value) {
      return currentNode;
    } else if (value < currentNode.value) {
      return this._searchNode(value, currentNode.left);
    } else {
      return this._searchNode(value, currentNode.right);
    }
  }

  inorderTraversal() {
    const result = [];
    this._inorderTraversalNode(this.root, result);
    return result;
  }

  _inorderTraversalNode(node, result) {
    if (node !== null) {
      this._inorderTraversalNode(node.left, result);
      result.push(node.value);
      this._inorderTraversalNode(node.right, result);
    }
  }

  preorderTraversal() {
    const result = [];
    this._preorderTraversalNode(this.root, result);
    return result;
  }

  _preorderTraversalNode(node, result) {
    if (node !== null) {
      result.push(node.value);
      this._preorderTraversalNode(node.left, result);
      this._preorderTraversalNode(node.right, result);
    }
  }

  postorderTraversal() {
    const result = [];
    this._postorderTraversalNode(this.root, result);
    return result;
  }

  _postorderTraversalNode(node, result) {
    if (node !== null) {
      this._postorderTraversalNode(node.left, result);
      this._postorderTraversalNode(node.right, result);
      result.push(node.value);
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.inorderTraversal()); // prints [2, 3, 4, 5, 6, 7, 8]
console.log(tree.preorderTraversal()); // prints [5, 3, 2, 4, 7, 6, 8]
console.log(tree.postorderTraversal()); // prints [2, 4, 3, 6, 8, 7, 5]

console.log(tree.search(6)); // prints Node object with value 6
console.log(tree.search(10)); // prints null
