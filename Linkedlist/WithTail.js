class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else if (index === this.size) {
        this.append(value);
      } else {
        const newNode = new Node(value);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
      }
    }
  
    search(value) {
      if (this.isEmpty()) {
        return -1;
      }
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    }
  
    removeByValue(value) {
      if (this.isEmpty()) {
        return null;
      }
      if (this.head.value === value) {
        const removedValue = this.head.value;
        this.head = this.head.next;
        this.size--;
        if (this.isEmpty()) {
          this.tail = null;
        }
        return removedValue;
      }
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next) {
        const removedValue = current.next.value;
        current.next = current.next.next;
        this.size--;
        if (current.next === null) {
          this.tail = current;
        }
        return removedValue;
      }
      return null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log('List is empty');
      } else {
        let current = this.head;
        let values = [];
        while (current) {
          values.push(current.value);
          current = current.next;
        }
        console.log('List values:', values.join(' -> '));
      }
    }
  }