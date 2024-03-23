class Stack{
    constructor(){
        this.Array=[]
    }
    push(value){
        this.Array.push(value)
    }
    pop(){
        this.Array.shift()
    }
    isEmpty(){
        if(this.Array===0){
            return null
        }
    }
    getSize(){
        const count =this.Array.length
        console.log("size =",count)
        return count
    }
    print(){
        if(this.isEmpty()){
            console.log('array is empty')
        }
        console.log(this.Array)
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.getSize()


stack.print()