class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insert(ins){
        let root= this.root
        const  node = new Node(value)

        if(root.value<ins.value){
           if(!root.left){
            return null
           }
           if(root.value<ins.value){
            this.insert(root.left,value)
           }

        }else{
            

        }

    }

}