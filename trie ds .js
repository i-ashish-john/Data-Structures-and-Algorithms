class trie{
    constructor(){
        this.children={}
        this.WordEnd=false
        // this.root=null
        
    }

}

class trieFind{
    constructor(){
       this.root=null
    }

    insert(word){
    let node =this.root
   if(!word){
    return null
   }
   for(const store of word){
    const char = node.children[store]
    if(!node.children[char]){
        let trie= new trie()
    }
    node=node.c

   }
       
    
    }
}