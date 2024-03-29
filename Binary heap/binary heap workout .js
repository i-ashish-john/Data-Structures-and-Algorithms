class maxHeap{
  constructor(){
    this.heap=[]
  }
     insert(value){
      this.heap.push(value)
      this.heapifyUp(this.heap.length-1){

      }
      delete(){

      }
      heapifyUp(index){
      const parentNode = Math.floor((index-1)/2)
      if(parentNode < 0|| this.heap[parentNode]>this.heap[index]){
        return 
      }
      [this.heap[index],this.heap[parentNode]]=[this.heap[parentNode],this.heap[index]]
       
       this.heapifyUp(parentNode)

      }
      heapifyDown(){

      }
    }
}