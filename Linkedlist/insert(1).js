class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        this.head=value
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            console.log("sorry this list is empty");
        }else{
        node.next=this.head
        this.head=node
        }
        this.size++
        }

        insert(value,index){
            if(index<0 || index >this.size){
                return
            }
            const node = new Node(value)
            if(index===0){
                this.prepend(value)
            }else{
                let previous = this.head
                for(let i=0;i<index-1;i++){
                    previous = previous.next
                }
                node.next=previous.next
                previous.next=node
                this.size++
            }
            // this.print()
        }

    // print(){
    //     if(this.isEmpty()){
    //         console.log('inside the print method')
    //     }else{
    //         let check =this.head
    //         // for(let i=0;i<this.size;i++){
    //             while(this.size){
    //             check = check.next
    //             console.log('The values are:',check);
    //         }
    //     }
    // }
    print() {
        if (this.isEmpty()) {
            console.log('inside the print method'); // Or a more informative message
        } else {
            let current = this.head;
            while (current) {
                console.log('The values are:', current.value);
                current = current.next;
            }
        }
    }
    
}

const newLinkedlist = new LinkedList()
console.log('List is Empty:',newLinkedlist.isEmpty())
console.log('the list size:',newLinkedlist.getSize())
newLinkedlist.print()
console.log("-------------")

newLinkedlist.prepend(20)
newLinkedlist.print()

newLinkedlist.prepend(22)
newLinkedlist.prepend(23)
newLinkedlist.prepend(24)
newLinkedlist.prepend(25)
newLinkedlist.print()

console.log("Total list size is:",newLinkedlist.getSize())
console.log('-------------')
console.log('After inserted');

newLinkedlist.insert(100,3)//this is the insert me

newLinkedlist.print()



// console.log('the total list value:',newLinkedlist.getSize())