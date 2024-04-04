class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    // Inorder traversal
    inorder(node) {                     //          
      if (node !== null) {              //
        this.inorder(node.left);           
        console.log(node.value);            
        this.inorder(node.right);       
      }                                 
    }                                   //     inorder method
                                        //       ----------------- 
                                        //                     1
                                        //                    / \     * parent ->left->right
                                        //                   2   3        then left->right continue
                                        //                  / \   \    * output is = 123456
                                        //                 4   5   6  
    // Preorder traversal
    preorder(node) {
      if (node !== null) {
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
      }
    }
  
    // Postorder traversal
    postorder(node) {
      if (node !== null) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
      }
    }
  }
  
  // Create a tree
  const tree = new Tree();
  tree.root = new Node(1);
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  
  // Inorder traversal
  tree.inorder(tree.root); // 2 1 3
  
  // Preorder traversal
  tree.preorder(tree.root); // 1 2 3
  
  // Postorder traversal
  tree.postorder(tree.root); // 2 3 1