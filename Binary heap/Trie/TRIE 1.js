 class Node{
    constructor(){
        this.children={}
        this.WordEnd=false
    }
 }

 class tire{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        for(let i=0;i<word.length;i++){
            const char = word[i]
            if(!this.children[char]){
                this.root=new Node()
            }
            this.root=this.children[char]
        }
        this.root.WordEnd=true
    }

 }

 const trieNode= new trie()