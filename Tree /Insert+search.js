
// implemented the search and the isertion method ,during search if is find the value then it were return true,other Wise false

/*   
 two type of transversal (dfs)and (bfs)
in the DFS=two popular ways to implement DFS: in-order and pre-order traversal  and postorder

    | ----------------------------------------------------------------------------------------------------   
    |    Pre-order Transversal:=explore the root node first, then recursively explore the left subtree, and finally the right subtree.
    |    --------------------
    |   result were like this:1 -> 2 -> 4 -> 5 -> 3
    |-----------------------------------------------------------------------------------------------------
------------------------| |  
             1          | |   
            / \         | |       In-order Traversal (DFS): In in-order traversal,
           2   3        | |     --------------------------
          / \           | |   the left subtree, then the root node, and finally the right subtree
         4   5          | | result were :4 -> 2 -> 5 -> 1 -> 3
                        | |     
------------------------| |       
           */

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
    }   

      //minimum 
    min(TheRoot){
        if(!TheRoot){
            return null
        }

        if(!TheRoot.left){
            return TheRoot
        }else{
           return this.min(TheRoot.left)
        }
    }

      //maximum 
    max(root){
        if(!root){
            return null
        }
        if(!root.right){
            return root
        }else{
           return this.max(root.right)
        }
    }

    isEmpty(){
        return this.root===null
    }
}

const bst= new BinarySearch()
bst.insert(10)
bst.insert(20)
bst.insert(30)

console.log(bst.search(bst.root,30))
console.log(bst.search(bst.root,10))

console.log('minimum value is  = ',bst.min(bst.root.value));
console.log('maximum values is  = ',bst.max(bst.root.value))
