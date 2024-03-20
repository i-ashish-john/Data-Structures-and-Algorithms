class Node{//here the node is creating 
    constructor(value){
    this.value=value
    this.next=null
   }
}

class LinkedList{  //in here the the operations for the nodes(linkedlist) (eg.insert,delete)                       
    constructor(){
        this.head =  null
        this.size = 0
    }
    isEmpty(){
        return this.size===0    
    }
    getSize(){
        return this.size
    }   
    prepend(value){ 
        const TheNode = new Node(value)
        if(this.isEmpty()){
            this.head=TheNode
        }else{
            TheNode.next=this.head
            this.head=TheNode
        }
        this.size++
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
          return;
        }
        const TheNode = new Node(value);
        if (index === 0) {
          this.prepend(value);
        } else {
          let previous = this.head;
          for (let i = 0; i < index - 1; i++) {
            previous = previous.next;
          }
          TheNode.next = previous.next;
          previous.next = TheNode;
          this.size++;
        }
        // Remove the problematic console.log
      }
      

    removeByValue(value) {
        if (this.isEmpty()) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {//from here the value is deleting by the value that is passing
                let removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

        print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let current = this.head
            while(current){
                console.log('List values are:',current.value)
                current=current.next;
            }
        }
    }
}; 

const TheList = new LinkedList()
console.log("empty or not check:",TheList.isEmpty());  
console.log('list size:',TheList.getSize());//here is printing without any element in list
TheList.insert(10,0)

TheList.insert(20,1)
TheList.insert(30,2)
TheList.insert(100,3)
TheList.print()
console.log('---last---')

console.log('list were',TheList.removeByValue(100))//in here the value is passing 
console.log('.....After removed the value.....')
TheList.print()
