class Queue{
    constructor(){
        this.Array=[]
    }
    enqueue(value){
        this.Array.push(value)
    }
    dequeue(){
        this.Array.shift()
    }
    peek(){
        return this.Array[0]
    }
    print(){
      if(!this.isEmpty()){
        console.log(this.Array)
      }else{
        console.log('Queue is empty!');
      }
    }
    isEmpty(){
        if(this.Array.length===0){
            return null
        }
    }

}

const queue=new Queue()
queue.enqueue(90)
queue.enqueue(100)
queue.enqueue(200)
queue.dequeue()

queue.print()