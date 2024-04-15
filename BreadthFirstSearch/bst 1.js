class Node{
    constructor(value){
        this.value =value
        this.left=null
        this.right=null
    }
}
class binarySearchTree{
    constructor(){
        this.root=null
    }
    insert(value){
    const node = new Node(value)
     if(this.root===null){
        this.root=node
    }else{
        this.insertNode(this.root,value)
    }  
    }

    insertNode(root,currentNode){
        if(currentNode.value<root.value){
            if(root.left===null){
                root.left=currentNode
            }
            this.insertNode(root.left,currentNode)
        }else{
             if(root.right===null){
                root.right=currentNode
             }
             this.insertNode(root.right,currentNode)
        }
    }
    search(root,findNode){
        if(!findNode){
            return false
        }
        if(root.value===findNode.value){
            return true
        }else if(findNode.value<root){
            return this.search(root.left,findNode)
        }else{
            return this.search(root.right,findNode)
        }
    }

    remove(value){
       if(!value){
        return null
       }
       this.deleteNode(this.root,value)
    }
    
    deleteNode(root,value){
        if(!root){
            return null
        }
        if(value.value<root.value){
             this.deleteNode(root.left,value)
        }else if(root.value>value.value){
            this.deleteNode(root.right,value)
        }else{

                if(!root.left&&!root.right){
                    return null
                }
            if(!root.left){
                return root.left
            }else{
                return root.false
            }

            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
    
        }
        return root
    }

    levelOrder(root){
        if(!root){
            return null
        }
        const queue=[]
         queue.push(root)
         while(queue.length){
            const current= queue.shift()
            console.log(current)
            if(current.left){
                queue.push(current)
            }
            if(current.right){
                queue.push(current)
            }
         }
    }

    min(root){
       if(!root.left) {
        return root.value
       }
       this.min(root.left)
    }
    max(root){
        if(!root.right){
            return root.value
        }
        this.max(root.right)
    }

    //dfs
    in(){
        if(this.root===null){
            return null
        }
        this.inOrder(this.root)

    }
    inOrder(root){
        if(root===null){
            return null
        }
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }




    }



const bst=new Node
