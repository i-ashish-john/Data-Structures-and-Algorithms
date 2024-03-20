const arr=[1,2,3,4,5,6,7,8,9];
const target=3
let value = binarySearch(arr,target)
console.log("index is :",value);


function binarySearch(arr,target){
var start=1
var end=arr.length    
    
while(start<=end){
    let middle =Math.floor((start+end)/2)//ensure that putting  brackets are proper
    if(target==arr[middle]){
        return arr[middle]
    }
    if(target<arr[middle]){
        end=arr[middle]
    }else if (target>arr[middle]){
        start=arr[middle]
    }else{
     return -1   
    }
    
}

}