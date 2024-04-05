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
  
    insert(value){
    const newnode=new Node(value)
    if(!this.root){
        return this.root=newnode
    }
    let currentNode= this.root
    while(true){

        if(value<currentNode.value){
            if(!currentNode.left){
               currentNode.left=newnode
               return
            }
            currentNode=currentNode.left
        }else{
            if(!currentNode.right){
                 currentNode.right=newnode
                 return
            }   
            currentNode= currentNode.right
        }

     }
    }

    levelOrderTransversal(){
        let queue=[]
        queue.push(this.root)

        while(queue.length>0){
            // console.log("the lenght of the queus is  = ",queue.length);
             const currentNode = queue.shift()
             console.log('Tree values are = ',currentNode.value);
             if(currentNode.left){
                queue.push(currentNode.left)
             }
             if(currentNode.right){
                queue.push(currentNode.right)
             }
        }

    }
    
    
}

const BST = new BinarySearch()

BST.insert(10)
BST.insert(20)
BST.insert(30)
BST.insert(40)
BST.insert(50)
BST.insert(60)

console.log('After level order transversal')
BST.levelOrderTransversal()