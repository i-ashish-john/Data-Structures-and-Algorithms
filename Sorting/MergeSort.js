function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    const mid =Math.floor(arr.length/2)
    const leftArr=arr.splice(0,mid)
    const rightArr=arr.splice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    const sortArray=[]
    while(leftArr.length&&rightArr.length){
     if(leftArr[0]<=rightArr[0]){
        sortArray.push(leftArr.shift())
     }else{
        sortArray.push(rightArr.shift())
     }
    }
    return [...sortArray, ...leftArr, ...rightArr]
}


const arr=[5,4,3,2,1]
console.log(mergeSort(arr));