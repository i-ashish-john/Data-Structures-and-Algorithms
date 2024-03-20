let arr = Array(100)
let target =5

let left=0
let right=arr.length-1


for(let i=0;i<arr.length;i++){
    let middile =right+left/2
     if(left<middile){
        left = middile-1
     }
}