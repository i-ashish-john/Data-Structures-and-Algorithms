insert(){
    const node=  new Node()
    if(this.isEmpty()){
        return null
    }
    else{
        this.insertNode(this.root,target)
    }
}
insertNode(root,target){
if(!root){
    this.root=target.value
}
if(root.value<target.value){
    root.left=target.value
    if(root.left===null){
        root.left=target
    }

}else{
    root.right=target.value
    if(root.right===null){
        root.right=target
    }

}

}

search(target){
  if(this.isEmpty()){
    return null
  }
this.searchNode(target)
}

searchNode(){

}



 preOrder(){
    if(this.isEmpty()){
        return false
    }
    const leftchildindex=
 }


// for(let i=1;i<=5;i++){
//     for(let j=0;j<i;j++){
//         console.log("*")
//     }
// }
