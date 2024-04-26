// const array2D = [
//     [0, 1, 1],
//     [0, 0, 0],
//     [1, 1, 0]
// ];

const array2D=[[0,1,1],[0,0,0],[1,1,0]]

let count = 0;
let value=[]

for(let i=0;i<array2D.length;i++){

    const value = array2D[i]
    for(let j=0;j<value.length;j++){
        
        if(value[j]===1){
            count++
        }
    }
}

console.log('count of zero is  = ',count);
