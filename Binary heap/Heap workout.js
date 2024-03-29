//basic implementation of the binary heap with heapify up and heapify down (insertion ,deletion,peek are included)
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);

    this.heapifyUp(this.heap.length - 1);
  }

  delete() {
    if (this.heap.length === 0) {
      return undefined;
    }

    const maxValue = this.heap[0];  

    this.heap[0] = this.heap.pop();
    console.log('QEQEQEWQWQWQEW:',this.heap[0],'THE ARRAY WAS:',this.heap)
    if (this.heap.length > 0) {
      this.heapifyDown(0);
    }

    return maxValue;
  }

  peek() {
    if (this.heap.length === 0) {
      return undefined;
    }

    return this.heap[0];
  }

  heapifyUp(index) {//maintainig the heap structure when the new element is added
    console.log('THE I N  D E X I S =',index)
    const parentIndex = Math.floor((index - 1) / 2);
    console.log('PARENT INDEX IS',parentIndex);

    if (parentIndex < 0 || this.heap[parentIndex] >= this.heap[index]) {
      return;
    }

    [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

    this.heapifyUp(parentIndex);
  }

  heapifyDown(index) {//mainaitaining the heap structure whent then the root element is deleted
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;


    let largestIndex = index;
    console.log("THE LARGEST INDEXX: ",largestIndex);

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
      largestIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
      largestIndex = rightChildIndex;
    }       

    if (largestIndex !== index) {
      // Swap the current value with the largest child
      [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];//swapping

      this.heapifyDown(largestIndex);
    }
  }

}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
maxHeap.insert(30);
maxHeap.insert(25);

console.log('Max Heap:', maxHeap.heap); // [30, 20, 25, 10, 15]
console.log('Peek (Maximum Value):', maxHeap.peek()); // 30

console.log('Deleting Maximum Value:', maxHeap.delete()); // 30
console.log('Max Heap after deletion:', maxHeap.heap); // [25, 20, 15, 10]