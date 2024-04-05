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
            const newNode=new Node(value)
            if(this.root === null){
                this.root=newNode
            }else{
                this.insertNode(this.root,newNode)
            }
        }

        insertNode(currentNode,newNode){
              if(newNode.value < currentNode.value){
                 if(currentNode.left===null){
                    currentNode.left=newNode
                 }else{
                    this.insertNode(currentNode.left,newNode)
                 }
              }else{
                    if(currentNode.right===null){
                        currentNode.right=newNode
                    }else{
                        this.insertNode(currentNode.right,newNode)
                    }
              }
        }

        inorder(){
            if(this.root===null){
                 return 
            }
            else{
                this._inorder(this.root)
            }
        }
        _inorder(currentNode){
           const currentNode= this.root
           this._inorder(currentNode.left)
           console.log(currentNode.value)
           this._inorder(currentNode.right)
        //    return currentNode.value
        }
    
        postorder(){
            if(this.root===null){
                return
            }else{
                this._postorder(this.root)
            }
        }
        _postorder(currentNode){///post order (LRN) subtrees left right then root ,
            if(currentNode.left!== null){
                this._postorder(currentNode.left)
            }
            if(currentNode.right!== null){
                this._postorder(currentNode.right)
            }
            console.log(currentNode.value)
        }

}

const DFS=new Depthfirst()
DFS.insert(1)
DFS.insert(2)
DFS.insert(3)
DFS.insert(4)
DFS.insert(5)
DFS.insert(6)

DFS.postorder()