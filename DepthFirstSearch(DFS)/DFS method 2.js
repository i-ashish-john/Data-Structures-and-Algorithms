class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Depthfirst {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

    inorder() {
        if (this.root === null) {
            return;
        } else {
            this._inorder(this.root);
        }
    }

    _inorder(currentNode) {
        if (currentNode === null) {
            return;
        }
        this._inorder(currentNode.left);
        console.log(currentNode.value);
        this._inorder(currentNode.right);
    }

    postorder() {
        if (this.root === null) {
            return;
        } else {
            this._postorder(this.root);
        }
    }

    _postorder(currentNode) {
        if (currentNode === null) {
            return;
        }
        this._postorder(currentNode.left);
        this._postorder(currentNode.right);
        console.log(currentNode.value);
    }

    preorder() {
        if (this.root === null) {
            return;
        } else {
            this._preorder(this.root);
        }
    }

    _preorder(currentNode) {
        if (currentNode === null) {
            return;
        }
        console.log(currentNode.value);
        this._preorder(currentNode.left);
        this._preorder(currentNode.right);
    }
}

const DFS = new Depthfirst();
DFS.insert(1);
DFS.insert(2);
DFS.insert(3);
DFS.insert(4);
DFS.insert(5);
DFS.insert(6);

console.log("Inorder Traversal:");
DFS.inorder();

console.log("\nPostorder Traversal:");
DFS.postorder();

console.log("\nPreorder Traversal:");
DFS.preorder();
