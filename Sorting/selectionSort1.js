const arr=[100,789,432,644,2123,1,10,899]
console.log('Befor:',arr);
for( let i=0;i<arr.length;i++){
    let selection = i//arr[i]
    for(let j=i;j<arr.length;j++){
        if(arr[j]<arr[selection]){
            let temp=arr[j]
            arr[j]=arr[selection]
            arr[selection]=temp
        }
            arr[selection]=arr[i]
      
    }
}

console.log('After:',arr);