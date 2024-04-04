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
          console.log('current node is :',currentNode.value);
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
  
          currentNode = currentNode.right;
        }
      }
    }
  
    levelOrder() {
      const queue = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.value);
  
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }
  
    insertRecursively(value, currentNode) {
      if (!currentNode){ 
        // console.log('qwrwerw  = ',new Node(value))
        return new Node(value);
      }
  
      if (value < currentNode.value) {
        currentNode.left = this.insertRecursively(value, currentNode.left);
      } else {
        // console.log('`123 reached ddd');
        currentNode.right = this.insertRecursively(value, currentNode.right);
      }
  
      return currentNode;
    }

  }
  
  const tree = new BinarySearchTree();
  // tree.insert(10);
  // tree.insert(5);
  // tree.insert(15);
  // tree.insert(2);
  // tree.insert(7);
  // tree.insert(12);
  // tree.insert(20);
  
  console.log('Level order traversal:');
  // tree.levelOrder();
  
  console.log('Recursive insert:');
  tree.insertRecursively(8);
  tree.levelOrder();