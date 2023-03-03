class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minRightNode = this._findMinNode(node.right);
      node.value = minRightNode.value;
      node.right = this._removeNode(node.right, minRightNode.value);
      return node;
    }
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inOrderTraversal() {
    const result = [];
    this._inOrderTraversalNode(this.root, result);
    return result;
  }

  _inOrderTraversalNode(node, result) {
    if (node !== null) {
      this._inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this._inOrderTraversalNode(node.right, result);
    }
  }

  preOrderTraversal() {
    const result = [];
    this._preOrderTraversalNode(this.root, result);
    return result;
  }

  _preOrderTraversalNode(node, result) {
    if (node !== null) {
      result.push(node.value);
      this._preOrderTraversalNode(node.left, result);
      this._preOrderTraversalNode(node.right, result);
    }
  }

  postOrderTraversal() {
    const result = [];
    this._postOrderTraversalNode(this.root, result);
    return result;
  }

  _postOrderTraversalNode(node, result) {
    if (node !== null) {
      this._postOrderTraversalNode(node.left, result);
      this._postOrderTraversalNode(node.right, result);
      result.push(node.value);
    }
  }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(9);
bst.insert(4);

console.log(bst.inOrderTraversal()); // Output: [1, 3, 4, 5, 7, 9]
console.log(bst.preOrderTraversal()); // Output: [5, 3, 1, 4, 7, 9]
console.log(bst.postOrderTraversal()); // Output: [1, 4, 3, 9, 7, 5]

console.log(bst.search(3));

bst.remove(3);
console.log(bst.inOrderTraversal());
