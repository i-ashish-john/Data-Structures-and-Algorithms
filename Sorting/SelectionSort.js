function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let compare =i
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[compare]){
                let temparr= arr[compare]
                arr[compare]=arr[j]
                arr[j]=temparr
            }
            arr[compare]=arr[i]


        }
    }
    return arr
}


const arr=[5,4,3,2,1]
const pass= selectionSort(arr)
console.log('pass',pass);