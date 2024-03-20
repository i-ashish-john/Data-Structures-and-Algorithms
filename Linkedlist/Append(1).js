class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = value
        this.size = 0
    }
    emptycheck() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    //0(1)
    Append(value) {//this is the append method adding element to the end of the node
        const node = new Node(value)
            if(this.emptycheck()){
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

     print(){
        if(this.emptycheck()){
            console.log('This list is Empty')
        }else{
            let currentnode=this.head
            console.log('list values:',currentnode.value);
        }
    };

    }

   let listoperations=new LinkedList()
   console.log("#Check list is empty",listoperations.emptycheck())
   console.log("#Check list size:",listoperations.getSize())

   listoperations.print()

   listoperations.Append(10)
   listoperations.print()
   listoperations.Append(20)
   listoperations.print()
   listoperations.Append(30)

   listoperations.print()
   