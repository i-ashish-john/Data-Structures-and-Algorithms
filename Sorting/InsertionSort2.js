const arr=[5,4,3,2,8,1]
console.log("Arr",arr)

for(let i=1;i<arr.length;i++){
   let position=arr[i]
   let j=i-1;
  while(arr[j]>=0&&arr[j]>position){
    arr[j+1]=arr[j]
    j--
  }
  arr[j+1]=position
  
}
console.log("Arr after:",arr);

