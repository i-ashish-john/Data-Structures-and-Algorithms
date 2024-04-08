class BinaryHeap {
    constructor() {
      this.heap = [];
    }
  
    peek() {
      if (this.heap.length === 0) {
        return null;
      }
      return this.heap[0];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    heapifyUp(index) {
      const rootNode = Math.floor((index - 1) / 2);
      if (index >= 0 && this.heap[rootNode] < this.heap[index]) {
        [this.heap[rootNode], this.heap[index]] = [this.heap[index], this.heap[rootNode]];
        this.heapifyUp(rootNode);
      }
    }
  
    delete() {
      if (this.heap.length === 0) {
        return null;
      }
      const intiger = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = intiger;
        this.bubbledown(0);
      }
    }
  
    bubbledown(value) {
      let leftIndex = (2 * value) + 1;
      let rightIndex = (2 * value) + 2;
      let rootValue = value;
  
      if (leftIndex < this.heap.length && this.heap[rootValue] < this.heap[leftIndex]) {
        rootValue = leftIndex;
      }
      if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[rootValue]) {
        rootValue = rightIndex;
      }
  
      if (rootValue !== value) {
        [this.heap[rootValue], this.heap[value]] = [this.heap[value], this.heap[rootValue]];
        this.bubbledown(rootValue);
      }
    }
  
    heapify(arr) {
      this.heap = arr;
      const n = this.heap.length;
   
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.bubbledown(i); 
      }
//math.floor(n/2)-1;i>=0;i--
//this.bubbledown(i)
    }

  }
  
  // Example usage
  const unsortedArr = [10, 20, 30, 40, 50, 60];
  const heap = new BinaryHeap();
  heap.heapify(unsortedArr);
  console.log('After heapify:', heap.heap);