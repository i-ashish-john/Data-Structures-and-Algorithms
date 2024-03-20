const reverse = require('./FullLinkedlist');

class Stack {
    constructor() {
        this.list = new reverse();
    }
    pop() {
        return this.list.removeFromFront();
    }
    push(value) {
        this.list.prepend(value);
    }
    peek() {
        return this.head;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    getSize() {
        return this.list.getSize();
    }
    print() {
        return this.list.print();
    }
}

function reverseString(string) {
    let stack = new Stack();
    let toStore = '';

    // Push all characters of the string onto the stack
    for (let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }

    // Pop all characters from the stack and add them to 'toStore'
    while (!stack.isEmpty()) {
        toStore += stack.peek();
    }

    return toStore;
}

const data = 'ashish';
const value = reverseString(data);
console.log('result is:', value);
