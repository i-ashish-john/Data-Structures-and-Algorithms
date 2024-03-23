class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.head=null
        this.size=0
    }
    push(value){
        const node = new Node(value)
        if(!this.head){
            this.head=node
        }
        else{
            // let position = this.head
            // while(position.next){
            //     position.next=node
            // }
            // this.head.next=node     |
            node.next=this.head    // \|/ DOWN  BY DOWN (LIFO)
            this.head=node        //            
        }                        //   
        this.size++             //   

    }
    pop(){
        let current = this.head
        this.head = this.head.next
       this.size--
        return current.value
    }
    peek(){
        if(this.isEmpty()){ 
            return console.log('list is empty')
        }
        return this.head.value
    }
    isEmpty(){
        if(this.size===0){
            return null
        }
    }
    print(){
        let print=this.head
        while(print){
            console.log('print =',print.value)
            print=print.next;
        }
    }

}


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.pop();


stack.print();
// node.pop()
// node.push()
// node.print()