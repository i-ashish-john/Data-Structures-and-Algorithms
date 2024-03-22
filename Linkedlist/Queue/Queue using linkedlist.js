//implementing queue using linkedlist 
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
            this.head=null
            this.size=0
    }
    enqueue(value){
        const node =new Node(value)
        if(!this.head){
            this.head=node
        }else{
            let current =this.head
            while(current.next){
                current =current.next
            }
            current.next=node
        }
        
        this.size++
    }
    dequeue(){
        if(!this.head()){
            return null
        }
        let position = this.head
        this.head = this.head.next
        this.size--
        return position.value
    }
    isEmpty(){
       return this.size===0;
    }
    getSize(){
        return this.size
    }
    print(){
        let current =this.head
        while(current){
            console.log('print =',current.value);
            current=current.next
        }

    }
}

const queue = new Queue()
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
console.log('Size =',queue.getSize())


queue.print()
