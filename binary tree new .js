class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(node, data) {
        if (node === null) {
            return false;
        }

        if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return true;
        }
    }
    delete(value){
      if(this.root===null){
        return false
      }
      this.deleteNode(value)
    }
    deleteNode(value){
       if(!value.data){
        return null
       }
    //    const node= this.root
       if(this.data.value){
        this.data.value=null
       }
    //    node=this.data.value-1

       return  

    }

    // Other methods like delete, inOrder, preOrder, postOrder traversal can be added as needed
}

// Example usage:

const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log(bst.search(bst.root, 60)); // Output: true
console.log(bst.search(bst.root, 90)); // Output: false

console.log('deleted = ',bst.delete(80))

