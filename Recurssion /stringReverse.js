// function reverseString(str) {
//     if (str.length <= 1) {
//       return str;
//     }
//       const reversedRest = reverseString(str.substring(1));
  
//     return str[0] + reversedRest;
//   }
  
//   const Name = "Akash";
//   const NewValue = reverseString(Name);
//   console.log(NewValue);
//////////////////////////

// function reverseString(str) {
//     if (str.length <= 1) {
//       return str;
//     }
//     const reversedRest = reverseString(str.substring(1));
//     return str[0] + reversedRest;
//   }
  
//   const Name = "Akash";
//   const NewValue = reverseString(Name);
//   console.log(NewValue);
////////////////////////////
function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }
    // const reversedRest = reverseString(str.substring(1));
    // return reversedRest + str[0]; 
        return str[str.length-1]+=reverseString(str.slice(0,str.length-1));
        // return str[str.length-1]+reverseString(str.slice(0,str.length-1));
}

const Name = "Akash";
const NewValue = reverseString(Name);
console.log(NewValue);

  
