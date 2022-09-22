class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      debugger;
      if (val < current.val) {
        debugger;
        //go left
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return;
        }
      } else if (val > current.val) {
        debugger;
        //go right
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  //base case: can't go left anymore or can't go right anymore
  //progress: going left or right

  insertRecursively(val, currNode = this.root) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (!currNode.left && val < currNode.val) {
      debugger;
      currNode.left = newNode;
      return this;
    }

    if (!currNode.right && val > currNode.val) {
      debugger;
      currNode.right = newNode;
      return this;
    }

    if (val < currNode.val) return this.insertRecursively(val, currNode.left);
    if (val > currNode.val) return this.insertRecursively(val, currNode.right);

  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;

      current = (val < current.val)
        ? current.left
        : current.right;
    }
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  //base case: traversed the whole thing
  //progress: go left and right
  findRecursively(val, currNode = this.root) {
    if (!this.root) return;

    if (!currNode.left && val < currNode.val) return;
    if (!currNode.right && val > currNode.val) return;

    if (currNode.val === val) return currNode;

    if (val < currNode.val) return this.findRecursively(val, currNode.left);
    if (val > currNode.val) return this.findRecursively(val, currNode.right);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  //base case: when there's no more node
  //progress: do sth, go left, go right

  dfsPreOrder(currNode = this.root, visitedNodes = []) {
    if (currNode === null) return visitedNodes;
    visitedNodes.push(currNode.val);
    this.dfsPreOrder(currNode.left, visitedNodes);
    this.dfsPreOrder(currNode.right, visitedNodes);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currNode = this.root, visitedNodes = []) {
    if (currNode === null) return visitedNodes;
    this.dfsInOrder(currNode.left, visitedNodes);
    visitedNodes.push(currNode.val);
    this.dfsInOrder(currNode.right, visitedNodes);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currNode = this.root, visitedNodes = []) {
    if (currNode === null) return visitedNodes;
    this.dfsPostOrder(currNode.left, visitedNodes);
    this.dfsPostOrder(currNode.right, visitedNodes);
    visitedNodes.push(currNode.val);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  // use queue: first in first out (push, shift)
  //base case: empty queue,no more left or right
  //progress: left or right
  bfs(queue = [this.root], visitedNodes = []) {
    if (!this.root) return [];

    if (!queue.length) return visitedNodes;

    //shift out first in line
    let currNode = queue.shift();

    //did something with currNode
    visitedNodes.push(currNode.val);

    //add children
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);


    //call itself with progress
    return this.bfs(queue, visitedNodes);
  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {
    let found = this.find(node.val);
    debugger;
    if (found && found.right) {
      debugger;
      return found.right.val;
    } else {
      debugger;
      return undefined;
    }

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
