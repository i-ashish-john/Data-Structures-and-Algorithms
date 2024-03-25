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
    insert(){   
        const newnode = new Node()
        if(this.isEmpty()){
             this.root=newnode
        }else{
            this.insertNode(this.root,newnode)//here  if already have a node then making as it the tree fromt the above code,
        }                                    //  in this else case if there is a value then calling insertNode method for finding the appropriate value for the node position
    }

    insertNode(root,newnode){   
        if(newnode.value<root.value){
            if(root.left===null){
                root.left=newnode
            }else{
                this.insertNode(root.left,newnode)
            }
      }else{
        if(root.right===null){
            root.right=newnode
        }else{
            this.insertNode(root.right,newnode)
        }

    }   
}

    search(root,value){
                if(!root){
                return false
/* * * * * */    }  else{     /* * * * * */
                if(root.value==value){
                    return true
                }if(value < root.value){
                    return this.search(root.left,value)
                }else{
                    return this.search(root.right,value)
                }

/* * * * * */   }       /* * * * * */

    }

    isEmpty(){
        return this.root===null
    }
}
const TreeCheck= new BinarySearch()
console.log('Empty or not?',TreeCheck.isEmpty());

TreeCheck.insert(7)
TreeCheck.insert(5)
TreeCheck.insert(3)
    
        console.log('search',TreeCheck.search(TreeCheck.root,7))
        console.log('search',TreeCheck.search(TreeCheck.root,5))
        console.log('search',TreeCheck.search(TreeCheck.root,3))