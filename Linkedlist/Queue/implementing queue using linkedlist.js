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
        const node= new Node(value)
        // console.log('sfsf')
            if(!this.head){
                this.head=node
            }else{
                let current=this.head
                while(current.next){
                    current =current.next
                }
                current.next = node
            }
             this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let position=this.head
        this.head=this.head.next
        this.size--;
        return position.value

    }

    isEmpty(){
     return this.size===0
    }
    getSize(){
    return this.size
    }
    print(){
        if(this.isEmpty(    )){
            return null
        }
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()

queue.print()

console.log('size = ',queue.getSize())



