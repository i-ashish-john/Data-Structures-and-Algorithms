function insertionSort(Array){
    for(let i=1;i<Array.length;i++){
        let Ith_value=Array[i]
        let j=i-1
        while(j>=0&&Array[j]>Ith_value){
            Array[j+1]=Array[j]
            j--
        }
        Array[j+1]=Ith_value
    }
    return Array
}

const values=insertionSort([90,80,70,60,50,40,30,20,10])
console.log('Sorted:',values);