class Node{//here the node is creating 
    constructor(value){
    this.value=value
    this.next=null
   }
}
///////////////////////////////////////////////////////////
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
    Append(value) {//this is the append method adding element to the end of the node
        const node = new Node(value)
            if(this.isEmpty()){
                this.head=node
            }else{
                let lastAdd = this.head;
                while(lastAdd.next){
                   lastAdd = lastAdd.next;
                } 
                console.log('###CHECKING!!@@:',lastAdd);
                lastAdd.next = node;
            }
          this.size++
     }
    //  removeFromFront(){
    //     if(this.isEmpty()){
    //         return null
    //     }   
    //     let removeNode=this.head
    //     this.head=this.head.next
    //     removeNode.next=null
    //     this.size--
    //  }
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }   
        let removeNode=this.head
        this.head=this.head.next
        removeNode.next=null
        this.size--;
        return removeNode; // Add this line to return the removed node
    }    
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{  
            let current = this.head
             while(current.next){
                console.log('List values:',current.value);
                current.next=this.head
             }
             current.next=TheNode
            
        }
    }
}; 

module.exports=LinkedList   
// const TheList = new LinkedList()

// TheList.prepend(20)
// TheList.print()

// TheList.prepend(30)
// TheList.print()

// TheList.prepend(40)
// TheList.print()