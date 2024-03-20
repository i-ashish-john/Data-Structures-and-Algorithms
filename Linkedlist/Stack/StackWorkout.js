const LinkedList = require('./FullLinkedlist');

class LinkedListStacks{
    constructor() {
        this.list = new LinkedList() 
    }
    push(value){
        // console.log('Enter in to the push method');
        this.list.prepend(value)
    }
    pop(){
       return this.list.removeFromFront()
    }
    peek(){
        return this.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
    print(){
        console.log("hello helo")
         this.list.print()
    } 
}
const stack= new LinkedListStacks()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()
console.log('The size is :',stack.getSize())