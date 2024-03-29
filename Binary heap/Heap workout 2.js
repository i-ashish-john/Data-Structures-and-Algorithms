class binaryHeap{
    constructor(){
        this.heap=[]
    }
    peek(){// fecthing the root values 
        if(this.heap.length===0){
            return undefined
        }
        return this.heap[0]
    }
    insert(value){
        if(this.heap.length===0){
            return undefined
        }
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }
    bubbleUp(index){
        const parentNode=Math.floor((index-1)/2)
        if(this.heap[parentNode]>this.heap.length && this.heap[parentNode] > this.heap[index] ){
            return
        }
        this.bubbleUp(parentNode)
    }
    delete(){
      this.heap[0]=this.heap.pop()
      if(this.heap.length!==0){
        this.bubbleDown(0)
      }

    }
    bubbleDown(value){
       
    }

}
const structure= new binaryHeap()