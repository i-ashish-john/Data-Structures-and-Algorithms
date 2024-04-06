class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Depthfirst{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root===null){
            this.root=newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(currentNode,node){   
        if(node.value<currentNode.value){
            if(currentNode.left===null){
                currentNode.left=node
            }else{
                this.insertNode(currentNode.left,node)
            }
        }else{
            if(currentNode.right===null){
                currentNode.right=node
            }else{  
                this.insertNode(currentNode.right,node)
            }
        }   
    }
    //
      inorder(){
        if(this.root!==null){
            this._inorder(this.root)
        }
      }

    _inorder(currentNode){
        if(currentNode!==null){
            // const currentNode=this.root
            
            this._inorder(currentNode.left)
            console.log('inorder transversal ',currentNode.value);
            this._inorder(currentNode.right)
        }
    }
    //
    postorder(){
        if(this.root!==null){
            this._postorder(this.root)
        }
    }   
    _postorder(currentNode){
        if(currentNode!==null){
            // const currentNode=this.root

            this._postorder(currentNode.left)
            this._postorder(currentNode.right)
            console.log('postorder transversal ',currentNode.value);
        }
    }
    preorder(){
        if(this.root!==null){
            this._preorder(this.root)
        }
    }
    _preorder(currentNode){
        if(currentNode!==null){
            // const currentNode=this.root
            console.log('preorder transversal =',currentNode.value);
            this._preorder(currentNode.left)
            this._preorder(currentNode.right)
        }
    }
}

const dfs= new Depthfirst()
dfs.insert(30)
dfs.insert(60)

dfs.insert(90)
dfs.insert(120)

dfs.inorder()
// dfs.postorder()
dfs.preorder()


// console.log()


// Inorder Traversal:
// The inorder traversal follows the order: left subtree -> root -> right subtree.
// Output: 30, 60, 90, 120

// Preorder Traversal:
// The preorder traversal follows the order: root -> left subtree -> right subtree.
// Output: 60, 30, 90, 120

// Postorder Traversal:
// The postorder traversal follows the order: left subtree -> right subtree -> root.
// Output: 30, 120, 90, 60