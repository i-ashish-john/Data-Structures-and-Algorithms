class Stack{
    constructor(){
        this.Array=[]
    }
    push(value){
        this.Array.push(value)
    }
    pop(){
        const index = Math.floor(this.Array.length/2)
        this.Array[index]=undefined

    }
    display(){
        if(!this.isEmpty()){
            console.log('result =',this.Array);
        }
    }

    isEmpty(){
    if(this.Array===0){
        return null
    }
   }
}

const stack= new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.pop()


stack.display()






