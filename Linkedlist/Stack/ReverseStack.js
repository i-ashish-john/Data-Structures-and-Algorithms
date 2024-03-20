class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return 'Underflow';
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseString(str) {
    let stack = new Stack();
    let reversedStr = '';


    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    // Pop all characters from the stack and form the reversed string
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage:
const originalString = 'hello';
const reversedString = reverseString(originalString);
console.log(reversedString); // Outputs: 'olleh'
