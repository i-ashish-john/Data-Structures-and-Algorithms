function stringReverse(s){
    if(s.length<=1){
        return s
    }
    else{
        return s[s.length-1]+=stringReverse(s.slice(0,s.length-1));
    }
}
const Name='qrst'
const value=stringReverse(Name)
    console.log(value);