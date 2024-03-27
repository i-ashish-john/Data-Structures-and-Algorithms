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
    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            // console.log('rr',queue)
            let issue=queue.shift()
            console.log('r',issue.value)
            if(issue.LHs){
                queue.push(issue.LHs)
            }if(issue.RHs){
                queue.push(issue.RHs)
            }
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
//  bst.postOrder(bst.root)
bst.levelOrder()


