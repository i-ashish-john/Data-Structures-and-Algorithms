//basic implementation of the binary heap (! used GPT for self learning )
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Insert a new value into the heap
  insert(value) {
    // Add the new value to the end of the heap
    this.heap.push(value);
    // console.log('ARRAY first:',this.heap)

    // Bubble up the new value to maintain the max heap property
    this.heapifyUp(this.heap.length - 1);
    // console.log('ARRAY second:',this.heap)
  }

  // Remove and return the maximum value from the heap
  delete() {
    // If the heap is empty, return undefined
    if (this.heap.length === 0) {
      return undefined;
    }

    // Store the root value (maximum value)
    const maxValue = this.heap[0];  

    // Replace the root with the last value in the heap
    this.heap[0] = this.heap.pop();
    console.log('QEQEQEWQWQWQEW:',this.heap[0],'THE ARRAY WAS:',this.heap)
    // If there are more than one element left in the heap
    if (this.heap.length > 0) {
      // Bubble down the new root value to maintain the max heap property
      this.heapifyDown(0);
    }

    // Return the maximum value
    return maxValue;
  }

  // Return the maximum value without removing it from the heap
  peek() {
    // If the heap is empty, return undefined
    if (this.heap.length === 0) {
      return undefined;
    }

    // Return the root value (maximum value)
    return this.heap[0];
  }

  // Bubble up a value at a given index to maintain the max heap property
  heapifyUp(index) {//maintainig the heap structure when the new element is added
    // Calculate the parent index
    console.log('THE I N  D E X I S =',index)
    const parentIndex = Math.floor((index - 1) / 2);
    console.log('PARENT INDEX IS',parentIndex);

    // If the parent index is out of bounds or the value is in the correct position
    if (parentIndex < 0 || this.heap[parentIndex] >= this.heap[index]) {
      return;
    }

    // Swap the value with its parent
    console.log('+)',[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]);
    [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

    // Recursively bubble up the swapped value
    this.heapifyUp(parentIndex);
  }

  // Bubble down a value at a given index to maintain the max heap property
  heapifyDown(index) {//mainaitaining the heap structure whent then the root element is deleted
    // Calculate the indices of the left and right children
    const leftChildIndex = 2 * index + 1;
    console.log("THE LEFT IS ",leftChildIndex);
    const rightChildIndex = 2 * index + 2;
    console.log("THE right IS ",rightChildIndex);


    // Initialize the largest index as the current index
    let largestIndex = index;
    console.log("THE LARGEST INDEXX: ",largestIndex);

    // If the left child exists and is larger than the current value
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
      largestIndex = leftChildIndex;
    }

    // If the right child exists and is larger than the current largest value
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
      largestIndex = rightChildIndex;
    }

    // If the current value is not the largest
    if (largestIndex !== index) {
      // Swap the current value with the largest child
      [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];//swapping

      // Recursively bubble down the swapped value
      this.heapifyDown(largestIndex);
    }
  }

}

// Example usage:
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