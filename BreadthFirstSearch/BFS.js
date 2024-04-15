class Node {
    constructor(value) {
      this.value = value;
      this.LHs = null;
      this.RHs = null;
    }
  }
  
  class BinarySearch { 
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.root = newNode;
      } else {
        this.insertNodeMethod(this.root, newNode);
      }
    }
  
    insertNodeMethod(root, newNode) {
      if (newNode.value < root.value) {
        if (root.LHs === null) {
          root.LHs = newNode;
        } else {
          return this.insertNodeMethod(root.LHs, newNode);
        }
      } else {
        if (root.RHs === null) {
          root.RHs = newNode;
        } else {
          return this.insertNodeMethod(root.RHs, newNode);
        }
      }
    }
    
    search(root, value) {
      if (!root) {
        return false;
      }
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
          return this.search(root.LHs, value);
      } else {
        return this.search(root.RHs, value);
      }
    }
  

    levelOrder(root) {
      if (!root) {
        return;
      }
  
      const queue = [];
      queue.push(root);
  
      while (queue.length) {
        const current = queue.shift();
        console.log(current.value);
  
        if (current.LHs) {
          queue.push(current.LHs);
        }
  
        if (current.RHs) {
          queue.push(current.RHs);
        }
      }
    }
  
    isEmpty() {
      return this.root === null;
    }
  }
  
  const bst = new BinarySearch();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.levelOrder(bst.root);

  console.log( bst.search(7));
 