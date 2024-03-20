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
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{  
            let current = this.head
            // let listvalues=''
            // while(current){
            //     // listvalues +=`${current.value} `
            //     // current = current.next
            // }
            console.log('List values:',current.value);
        }
    }
}; 

const TheList = new LinkedList()
console.log("empty or not check:",TheList.isEmpty());  
console.log('list size:',TheList.getSize());//here is printing without any element in list
TheList.print()//printing without any element

TheList.prepend(10)//passing to the append method a value 10
TheList.print()
TheList.prepend(20)//passing to the append method a value 20
TheList.print()
TheList.prepend(30)//passing to the append method a value 30
// TheList.print()
TheList.print()//then printing the current value in the list which is 30

console.log('--------------')
console.log("Total list size:",TheList.getSize());