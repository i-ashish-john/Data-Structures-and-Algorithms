let arr1=[{a:1},[40],80]

let arr2=[{a:1,b:2,c:3},[40],120]
let arr3=[...arr1,...arr2].flat()
// console.log(arr3);

let res=[...new Set(arr3.map((v)=>{
    
    if(v.a){

        // console.log('VA',res)
        return v.a
    }else if(v.b){
        console.log("VB",v.b);
return v.b
    }else{
        return v
    }
    
}))]
console.log(res);