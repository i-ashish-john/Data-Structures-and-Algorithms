const array=[[1,2,3],[4,5,6]];
let value=[]

for (let i = 0; i < array.length; i++) {
// console.log(array[i],i);    
let newarr = array[i]

console.log("new array;",newarr)
for (let j = 0; j < newarr.length; j++) {
    value.push(newarr[j])    
}
}
console.log('value is :',value);


