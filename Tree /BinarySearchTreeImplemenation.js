// this is the basic implementation of the binary search tree

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearch{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
}
const searching= new BinarySearch()
console.log('Empty or not?',searching.isEmpty()); //display true