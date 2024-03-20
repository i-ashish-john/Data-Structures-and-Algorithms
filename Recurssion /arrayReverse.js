// function Reverse(Array){
//     if(Array.length<=1){
//         return Array
//     }
        
//     let subarray= Reverse(Array.slice(1));   \
//     console.log("the subarray:",subarray);   \
//     return subarray.concat(Array[0]);        \   both methods are for reversing
                                            //  \   above is the recursion and the 
                                             //  \   below is the normal method
// }
// // let array=[];
const Array=[1,2,3,4,5];
let arr=[]
let newArr=[]
// const reversed=Reverse(Array);
// console.log('The reversed array is :',reversed);
// console.log('result:',array);
///////////////////////////////////
for(i=Array.length;i>=0;i--){
    arr=Array[i]
    newArr.push(arr) 
  
}
console.log('length is:',newArr);