class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
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
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(root, newNode) {
      if (newNode.value < root.value) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  
    isEmpty() {
      return this.root === null;
    }
  
    search(root, value) {
      if (!root) {
        return false;
      }
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  
    findMin(root) {
      if (!root.left) {
        return root.value;
      }
      return this.findMin(root.left);
    }
  
    findMax(root) {
      if (!root.right) {
        return root.value;
      }
      return this.findMax(root.right);
    }


/**/delete(){
        this.root=this.deleteNode(this.root,value)
    }
/**/deleteNode(root,value){
    if(root===null){
        return root.value
    }    
    if(value < root.value){
        return this.deleteNode(root.left,value)
    }else if(value > root.value){
        return this.deleteNode(root.right,value)

    }else{
        if(!root.left&& !root.right){
            return root.value
        }
        if(!root.right){
            return root.left
        }else if(!root.left){
            return root.right
        }
        root.value=this.findMin(root.right)//when the root's value is removed the the right's most smallest value were saved means the right child node is at this position ,
        root.right=this.deleteNode(root.right,root.value)//that is why right node is saving in this postion
        }
        return root
    }

    }

  
  
  const TreeCheck = new BinarySearch();
  console.log('Empty or not?', TreeCheck.isEmpty());
  TreeCheck.insert(7);
  TreeCheck.insert(6);
  TreeCheck.insert(8);
  TreeCheck.insert(2);
  TreeCheck.insert(5);
  TreeCheck.insert(3);
  console.log('search', TreeCheck.search(TreeCheck.root, 7));
  console.log('search', TreeCheck.search(TreeCheck.root, 5));
  console.log('search', TreeCheck.search(TreeCheck.root, 3));
  console.log('Minimum value:', TreeCheck.findMin(TreeCheck.root));
  console.log('Maximum value:', TreeCheck.findMax(TreeCheck.root));