class Node{//here the node is creating 
    constructor(value){
    this.value=value
    this.next=null
   }
}
/////
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
      

    removeFrom(index){
        if(index<0||index>=this.size){
            return null
        }
        let check                     // * this is for removing the  the first element from the node,  
        check = this.head            // it is also in the head!
        if(index===0){               //
            this.head=this.head.next // * here is the heads next value  to the heads main value , 
        }                            // in here is no head to point out only the address is thier!
        this.size--
        return check.value
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
console.log('------removing')
console.log('[removed...',TheList.removeFrom(0),']');//here i removed the 10 by index 0
console.log('removing------')
TheList.print()
// console.log('list size:',TheList.getSize());//here is printing without any element in list
