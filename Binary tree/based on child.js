// <!-- binary tree based on child 

// ->full binary tree 
// -> degenerate binary tree/pathological binary tree
// ->swekwed binary tree
//    ->left swekwed 
//    ->right swekwed

//  left SWEKWED BINARY TREE
// ----------------- -->
class Node{
constructor(){
    this.key=0
    this.left=this.righ=null
 }
}

function newNode(value){
   let node=new Node()
   node.key=value
   node.left=node.right=null
   
   return (node)
}

let root= newNode(1)
root.left=newNode(2)
root.left.left=newNode(3)

console.log(root)

