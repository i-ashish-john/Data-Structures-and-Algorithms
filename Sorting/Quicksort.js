function QuickSort(arr){
    if(arr.length<=1){
        return arr
    }
    const pivot =arr[arr.length-1]
    const leftArray=[]
    const rightArray=[]
    for(let i=0;i<arr.length-1;i++){
       if(arr[i]<pivot){
        leftArray.push(arr[i])
       }else{
         rightArray.push(arr[i])
       }
    }
    
    const Array=[...QuickSort(leftArray),pivot,...QuickSort(rightArray)]
    
    console.log('THe pivot:',pivot);
    console.log("concat:",Array)
    return Array
}

const arr=[665,34,532,53,73,10,100,200,10,4345]
// const arr=[5,4,3,2,1]
const pass=QuickSort(arr)
console.log('pass',pass);