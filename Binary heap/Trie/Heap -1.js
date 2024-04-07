class binaryHeap{
    constructor(){
        this.heap=[]
    }
    peek(){
      if(this.heap.length==0)  {
        return null
      }
      return this.heap[0]
    }

    insert(value){
        if(this.heap.length==0){
            return null
        }else{
            this.heap.push(value)
            this.heapifyUp(value.length)
        }
    }
    heapifyUp(index){                //  <----
        const rootNode=Math.floor((index-1)/2)
        if(this.heap.length >=0&& this.heap[rootNode]<this.heap[index]){
            [this.heap[rootNode],this.heap[index]]=[this.heap[index],this.heap[rootNode]]
            return this.heapifyUp(rootNode)
        }
    }
    delete(){
        if(!this.heap){
                return null
        }
        else{
            let intiger = this.heap.pop()
            this.heap[0]=intiger
            this.bubbledown(0)
        }
    }

    bubbledown(value){
        let leftIndex=(2*value)+1
        let rightIndex=(2*value)+2

        let rootValue=value
        if(rootValue<this.heap.length && this.heap[rootValue]<this.heap[leftIndex]){
            rootValue=leftIndex
        }
        if(rootValue<this.heap.length && this.heap[rightIndex]<this.heap[rootValue]){
            rootValue=rightIndex
        }

        if(rootValue!==value){
            [this.heap[rootValue],this.heap[value]]=[this.heap[value],this.heap[rootValue]]
            this.bubbledown(rootValue)
        }
    }
}

const heap=new binaryHeap()
heap.insert(10)
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(50)
heap.insert(60)

heap.delete()

console.log('After the delete ',heap.heap);
