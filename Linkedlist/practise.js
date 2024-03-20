class Node{
    constructure(value){
        this.value=value
        this.next
    }
}

class LinkedList{
    constructor(value){
        let node =new Node()
        this.head=null
        this.size=0
    }
    isEmpty(){
        this.size===0
    }
    getSize(){
        this.size
    }
    prepend(value){
        let node =new Node(value)
        if(this.isEmpty()){
            return 
        }
        node.next=this.head
        this.node=this.head
        this.size++
    }
    // print(){
    //     if(this.isEmpty()){
    //         return 
    //     }
    //     let current = this.head
    //     while(current.next){
    //         current=current.next
    //         console.log(current,'-->')

    //     }
    // }

}

const list = new LinkedList()
list.Append(5)
list.Append(10)
list.Append(15)
list.Append(20)
list.Append(25)
list.print()