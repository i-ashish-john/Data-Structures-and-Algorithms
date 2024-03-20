class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteMiddle() {
        if (!this.head) {
            console.log("List is empty. Cannot delete middle element.");
            return;
        }

        let slowPointer = this.head;
        let fastPointer = this.head;
        let prev = null;

        while (fastPointer && fastPointer.next) {
            prev = slowPointer;
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        if (prev) {
            // If there is a previous node, skip the middle node
            prev.next = slowPointer.next;
        } else {
            // If there is no previous node, the middle node is the head
            this.head = slowPointer.next;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Original Linked List:");
linkedList.print();

linkedList.deleteMiddle();

console.log("\nLinked List after deleting middle element:");
linkedList.print();
