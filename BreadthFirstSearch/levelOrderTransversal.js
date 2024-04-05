// Define the Node and BinarySearchTree classes
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

  // Insert method
  insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
          this.root = newNode;
          return;
      }
      let currentNode = this.root;
      while (true) {
          if (value < currentNode.value) {
              if (!currentNode.left) {
                  currentNode.left = newNode;
                  return;
              }
              currentNode = currentNode.left;
          } else {
              if (!currentNode.right) {
                  currentNode.right = newNode;
                  return;
              }
              currentNode = currentNode.right;
          }
      }
  }

  // Level order traversal method
  levelOrder() {
      const queue = [];
      queue.push(this.root);
      while (queue.length > 0) {
        console.log('length of the queue is = ',queue.length);
          const currentNode = queue.shift();
          console.log('current node in the level order = ',currentNode.value);
          if (currentNode.left) {
              queue.push(currentNode.left);
          }
          if (currentNode.right) {
              queue.push(currentNode.right);
          }
      }
  }

  // Recursive insert method
  insertRecursively(value, currentNode = this.root) { // Added default parameter
      if (!currentNode) {
          return new Node(value);
      }
      if (value < currentNode.value) {
          currentNode.left = this.insertRecursively(value, currentNode.left);
      } else {
          currentNode.right = this.insertRecursively(value, currentNode.right);
      }
      return currentNode;
  }
}

// Create a BinarySearchTree instance
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);
console.log('Level order traversal:');
tree.levelOrder();
console.log('Recursive insert:');
tree.insertRecursively(8);
tree.levelOrder();
