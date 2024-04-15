class Heap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(indexOf){
            const parent = Math.floor((indexOf-1)/2)
            if(parent>0||this.heap[parent]>this.heap[indexOf]){
                return 
            }
            [this.heap[parent],this.heap[indexOf]=this.heap[indexOf],this.heap[parent]]
            this.heapifyUp(parent)
    }

    // delete(value){
    //     this.heap[0]=this.heap.pop()
    //     if(value>0){
    //         this.heapifyDown(0)
    //     }

    // }
    delete(){
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return max

    }
    heapifyDown(value){
        const leftchild=2*value+1
        const rightchild=2*value+2

        let current=value
        if(leftchild<this.heap.length&&this.heap[leftchild]>this.heap[current]){
            current=leftchild
        }
        if(current<this.heap.length&&this.heap[rightchild]<this.heap[current]){
            current=rightchild
        }
        if(current!==value){
            [this.heap[current],this.heap[value]=this.heap[value],this.heap[current]]
            this.heapifyDown(current)

        }
    }
   
    heapSort(array){
        let st=[]
        let length=this.heap.length
        for(let i=0;i<length;i++){
            st.push(this.delete())
        }
        return st

    }

}
const heap=new Heap

const array=[5,7,9,2,4]
console.log(heap.heapSort(array))

heap.insert(1)
