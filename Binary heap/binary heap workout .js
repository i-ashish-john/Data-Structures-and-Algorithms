class maxHeap{
  constructor(){
    this.heap=[]
  }
     insert(value){
      this.heap.push(value)
      this.heapifyUp(this.heap.length-1)

      }


      delete(value){
        this.heap[0]=this.heap.pop()
        if(this.heap.length>0){
          this.heapifyDown(0)
        }
      }

      heapifyUp(index){
      const parentNode = Math.floor((index-1)/2)
      if(parentNode < 0|| this.heap[parentNode]>this.heap[index]){
        return 
      }
      [this.heap[index],this.heap[parentNode]]=[this.heap[parentNode],this.heap[index]]
       
       this.heapifyUp(parentNode)

      }

      heapifyDown(indices){
        const leftChildIndex=2*indices+1
        const rightChildIndex=2*indices+2

        let rootvalue=indices
        if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]>this.heap[rootvalue]){
          this.heap[rootvalue]=this.heap[leftChildIndex]
        }

      }
}
