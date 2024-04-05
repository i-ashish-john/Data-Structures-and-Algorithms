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
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNodeMethod(this.root, node);
        }
    }

    insertNodeMethod(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNodeMethod(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNodeMethod(root.right, node);
            }
        }
    }

    search(target) {
        return this.searchNode(this.root, target);
    }

    searchNode(root, target) {
        if (root === null || root.value === target) {
            return root;
        }

        if (target < root.value) {
            return this.searchNode(root.left, target);
        } else {
            return this.searchNode(root.right, target);
        }
    }

    isEmpty() {
        return this.root === null;
    }
}

// Example usage:
const bst = new BinarySearch();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

const searchResult = bst.search(7);
if (searchResult) {
    console.log(`Found value ${searchResult.value} in the tree.`);
} else {
    console.log("Value not found in the tree.");
}
