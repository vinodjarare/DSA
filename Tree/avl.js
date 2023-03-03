class Node {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node = this.root) {
    if (node === null || node === undefined) {
      return 0;
    }

    return node.height;
  }
  getBalance(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  getMinValue(node = this.root) {
    if (node === null) {
      return null;
    }

    let current = node;
    while (current.left !== null) {
      current = current.left;
    }

    return current.value;
  }

  getMaxValue(node = this.root) {
    if (node === null) {
      return null;
    }

    let current = node;
    while (current.right !== null) {
      current = current.right;
    }

    return current.value;
  }

  insert(value) {
    this.root = this._insertNode(value, this.root);
  }

  _insertNode(value, node) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(value, node.left);
    } else if (value > node.value) {
      node.right = this._insertNode(value, node.right);
    } else {
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balance = this.getBalance(node);

    if (balance > 1 && value < node.left.value) {
      return this._rightRotate(node);
    }

    if (balance < -1 && value > node.right.value) {
      return this._leftRotate(node);
    }

    if (balance > 1 && value > node.left.value) {
      node.left = this._leftRotate(node.left);
      return this._rightRotate(node);
    }

    if (balance < -1 && value < node.right.value) {
      node.right = this._rightRotate(node.right);
      return this._leftRotate(node);
    }

    return node;
  }

  _leftRotate(node) {
    const rightNode = node.right;
    const leftSubtreeOfRightNode = rightNode.left;

    rightNode.left = node;
    node.right = leftSubtreeOfRightNode;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    rightNode.height =
      1 +
      Math.max(this.getHeight(rightNode.left), this.getHeight(rightNode.right));

    return rightNode;
  }

  _rightRotate(node) {
    const leftNode = node.left;
    const rightSubtreeOfLeftNode = leftNode.right;

    leftNode.right = node;
    node.left = rightSubtreeOfLeftNode;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    leftNode.height =
      1 +
      Math.max(this.getHeight(leftNode.left), this.getHeight(leftNode.right));

    return leftNode;
  }

  search(value) {
    return this._searchNode(value, this.root);
  }

  _searchNode(value, node) {
    if (node === null || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this._searchNode(value, node.left);
    } else {
      return this._searchNode(value, node.right);
    }
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minRight = this._findMinNode(node.right);
        node.value = minRight.value;
        node.right = this._removeNode(node.right, minRight.value);
      }
    }

    return this._balanceNode(node);
  }

  _balanceNode(node) {
    if (!node) {
      return node;
    }

    if (this.getBalanceFactor(node) > 1) {
      if (this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
      }

      node = this.rotateRight(node);
    } else if (this.getBalanceFactor(node) < -1) {
      if (this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
      }

      node = this.rotateLeft(node);
    }

    return node;
  }

  getNodeHeight(node) {
    if (!node) {
      return -1;
    }

    return node.height;
  }

  getBalanceFactor(node) {
    if (!node) {
      return 0;
    }

    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  rotateRight(node) {
    const tempNode = node.left;
    node.left = tempNode.right;
    tempNode.right = node;

    this.updateNodeHeight(node);
    this.updateNodeHeight(tempNode);

    return tempNode;
  }

  rotateLeft(node) {
    const tempNode = node.right;
    node.right = tempNode.left;
    tempNode.left = node;

    this.updateNodeHeight(node);
    this.updateNodeHeight(tempNode);

    return tempNode;
  }

  updateNodeHeight(node) {
    node.height =
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1;
  }

  _findMinNode(node) {
    if (node === null) {
      return null;
    } else if (node.left === null) {
      return node;
    } else {
      return this._findMinNode(node.left);
    }
  }

  inorderTraversal() {
    return this._inorderTraversalNode(this.root);
  }

  _inorderTraversalNode(node) {
    if (node !== null) {
      this._inorderTraversalNode(node.left);
      console.log(node.value);
      this._inorderTraversalNode(node.right);
    }
  }
}

const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);

// Get the height of the tree
const height = avlTree.getHeight();
console.log(`Height of the tree: ${height}`);

// Get the minimum value in the tree
const minValue = avlTree.getMinValue();
console.log(`Minimum value in the tree: ${minValue}`);

// Get the maximum value in the tree
const maxValue = avlTree.getMaxValue();
console.log(`Maximum value in the tree: ${maxValue}`);

// Search for a value in the tree
const searchValue = 30;
const foundNode = avlTree.search(searchValue);
console.log(`Node with value ${searchValue}:`, foundNode);

// Remove a value from the tree
const removeValue = 20;
avlTree.remove(removeValue);
console.log(`Removed value ${removeValue}.`);

// Traverse the tree in-order
console.log("In-order traversal:");
console.log(avlTree.inorderTraversal());
