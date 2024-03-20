// // let arr=[1,2,3,4,5]
// const target=6;
// let step=0;
// let arr = new Array(16);
// //linear search
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         console.log("index",i);
//     }
//     step++
// }

// console.log("step",step);

const arr = Array(32)
const target = 5;
let ans = binarySearch(arr, target);
console.log(ans);



function binarySearch(arr, target) {
    let steps = 0
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        steps++;
        let mid = Math.floor((start + end) / 2); // Correct calculation of mid
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log(steps)
    return -1; // Move the return statement outside of the while loop
}

