//Ascending method \Bubble sort
const arr=[532,5235,5,0,35,25,-142]
let value=[];
console.log('Before inserted:',arr.toString());
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
        
        if(arr[j]>arr[j+1]){
            value=arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=value
        }
    }
}
console.log('After inserted:',arr.toString());







