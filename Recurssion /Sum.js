// A function that call itself is called recurssion 
function sum(n) {
    if (n === 5) { // Base condtion of the recurssive function 
        return;
    }
    
    console.log("This is a sum function ",n);
    n++;
    sum(n); // Pass the parameter n in the recursive call
}

sum(0); // Call the function with an initial value for n
