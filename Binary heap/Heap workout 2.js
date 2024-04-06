class binaryHeap{
    constructor(){
        this.heap=[]
    }
    peek(){// fetching the root values 
        if(this.heap.length===0){
            return undefined
        }
        return this.heap[0]
    }
    insert(value){
        // if(!this.heap.length){
        //     return undefined
        // }
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){//length might be smaller because it is in the initial stge 
        const parentNode = Math.floor((index - 1) / 2);

        if (parentNode >= 0 && this.heap[parentNode] < this.heap[index]) {
            [this.heap[parentNode], this.heap[index]] = [this.heap[index], this.heap[parentNode]];
            this.bubbleUp(parentNode);
          }

    }

    delete(){
      let lastelement=this.heap.pop()
      if(this.heap.length > 0){
        this.heap[0]=lastelement
        this.bubbleDown(0)
      }
    }
    
    bubbleDown(value){
        let leftIndex= 2*value+1
        let rightIndex=2*value+2

        let rootValue = value
        if(leftIndex<this.heap.length && this.heap[leftIndex]>this.heap[rootValue]){
            rootValue = leftIndex
        }
        if(rightIndex<this.heap.length && this.heap[rightIndex]>this.heap[rootValue]){
            rootValue=rightIndex
        }
        if(rootValue !== value){
            [this.heap[value],this.heap[rootValue]]=[this.heap[rootValue],this.heap[value]]
            this.bubbleDown(rootValue)
        }

    }       

}
const structure= new binaryHeap()
structure.insert(10)
structure.insert(20)
structure.insert(30)
structure.insert(40)
structure.insert(50)

structure.delete()
console.log('is:',structure.heap)