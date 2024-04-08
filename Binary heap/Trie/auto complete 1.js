class  Node{
    constructor(){
   this.childrens={}
   this.EndWord=false
    }
}

class trie{
    constructor(){
        this.root=new Node()

    }

    insert(word){
        if(word.length===0){
            return
        }
        let root =  this.root
        for(let i=0;i<word.length;i++){
            const char= word[i]

            if(!root.childrens[char]){
                root.childrens[char]=new Node()
            }
            root=root.childrens[char]
        }
        root.EndWord=true
    }

    
}
const tire = new trie()
tire.insert('apple')
tire.insert('appy juice')
tire.insert('elephant soop')