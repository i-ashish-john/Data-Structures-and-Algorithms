const Queue = require('./FullLinkedlist00')//* The required name only can be 
                                          //   used as the instance of the 
class LinkedListQueue{                   //    other class's . 
    constructor(){
        this.list = new Queue()
    }
    enqueue(value){
        this.list.Append(value)
    }
    dequeue(){
        this.list.removeFromFront()
    }
    peek(){
        if(!this.isEmpty()){
            return this.list.head.value 
        }
        return null;
       
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
    print(){
       return this.list.print()
    }
}

const queue = new LinkedListQueue()
console.log(queue.isEmpty())


console.log('INSERTING');
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
// console.log(queue.print());
console.log('The size is :',queue.getSize())
// queue.print()