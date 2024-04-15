class maxHeap{
  constructor(){
    this.heap=[]
  }
     insert(value){
      this.heap.push(value)
      this.heapifyUp(this.heap.length-1)

      }

      heapifyUp(index){
      const parentNode = Math.floor((index-1)/2)
      if(parentNode < 0|| this.heap[parentNode]>this.heap[index]){
        return 
      }
      [this.heap[index],this.heap[parentNode]]=[this.heap[parentNode],this.heap[index]]
       
       this.heapifyUp(parentNode)//recursilvely call this method
      
      }

      delete(){
        this.heap[0]=this.heap.pop()
        if(this.heap.length>0){
          this.heapifyDown(0) 
        }
      }

      heapifyDown(indices){
        const leftChildIndex=2*indices+1
        const rightChildIndex=2*indices+2

        let rootvalue=indices
        
        if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]>this.heap[rootvalue]){
            rootvalue=leftChildIndex
        }
        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]>this.heap[rootvalue]){
          rootvalue=rightChildIndex
        }
        if(rootvalue!==indices){
          [this.heap[indices],this.heap[rootvalue]]= [this.heap[rootvalue],this.heap[indices]]
          this.heapifyDown(rootvalue)
        }

      }
      peek(){
        if(this.heap.length===0){
          return null
        }
        return this.heap[0]
      }
}

const maxheap = new maxHeap()
maxheap.insert(10)
maxheap.insert(20)

maxheap.insert(30)
maxheap.insert(40)
maxheap.insert(50)

console.log('deleted values:',maxheap.delete());
console.log('The array was :',maxheap.heap)



