//implemented the preorder in here
//     |    Pre-order Transversal:=explore the root node first, then recursively explore the left subtree, and finally the right subtree.
//     |    --------------------
//     |   result were like this:1 -> 2 -> 4 -> 5 -> 3

//
class Node{
    constructor(value){
        this.value=value
        this.LHs=null
        this.RHs=null
    }
}   


class BinarySearch{
    constructor(){
        this.root=null  
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNodeMethod(this.root,newNode)
        }
    }

    insertNodeMethod(root,newNode){
       if(newNode.value<root){        
        if(root.LHs===null){
            root.LHs=newNode
        }else{
            return this.insertNodeMethod(root.LHs,newNode)
        }


       }else{
        if(root.RHs===null){
            root.RHs=newNode
        }else{
            return this.insertNodeMethod(root.RHs,newNode)
        }


       }
    }

    search(root,value){
        if(!root){
            return false
        }
      if(root.value===value){
        return true
      }else if(value<root.value){
            return this.search(root.LHs,value)//here if we find the element which is smaller then it were return to true 
        }else{                               // 
            return this.search(root.RHs,value)
        }
    }/////////////////////////////////pre-order method for printing values 
    preorder(root) {
        if (!root) {
            return;
        }
        console.log('root is:', root.value);
        this.preorder(root.LHs);
        this.preorder(root.RHs);
    }////////////////////////////////

    isEmpty(){
        return this.root===null
    } 
}

const bst= new BinarySearch()
bst.insert(9)
bst.insert(10)
bst.insert(3)
bst.insert(1)
bst.insert(15)
bst.preorder(bst.root); 
// console.log(bst.search(bst.root,30))
// console.log(bst.search(bst.root,10))

