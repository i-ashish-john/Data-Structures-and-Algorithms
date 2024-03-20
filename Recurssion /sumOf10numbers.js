function sum(number){
if(number== 1||number==0){
    return 1;
 }  
 return number + sum(number - 1);
}
const value= 10
console.log('the sum of the ',value +' is :',sum(10))
///////////////////////////
// function factorial(n) {
//     // Base case: if n is 0 or 1, return 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     // Recursive case: return n multiplied by factorial of (n - 1)
//     return n * factorial(n - 1);
// }

// // Example usage
// const number = 5;
// console.log("Factorial of", number, "is:", factorial(number));
