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
    preOrder(root) {
        if (!root) {
            return;
        }         //an issue with the code in the preorder method

        this.preOrder(root.LHs);
        this.preOrder(root.RHs);
       console.log( root.value);

    }////////////////////////////////

    inorder(root){
        if(root){
            // return null
        // }
        this.inorder(root.LHs)
        this.inorder(root.RHs)
        console.log(root.value)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.LHs)
            this.postOrder(root.RHs)
            console.log(root.value)

        }
    }

    isEmpty(){
        return this.root===null
    } 
}

const bst= new BinarySearch()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.inorder(bst.root); 
 bst.postOrder(bst.root)


// bst.preOrder(bst.root); 
// console.log(bst.search(bst.root,30))
// console.log(bst.search(bst.root,10))

