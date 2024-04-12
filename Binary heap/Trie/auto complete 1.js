class  Node{
    constructor(){
   this.childrens={}
   this.EndWord=false
   this.suggestion=[]
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


    autocomplete(prefix){
        let node=this.findNode(prefix)
        if(!node){
            return []
        }
        this.collectSuggestions(node)
    }

    findNode(prefix){
        let node = this.root
        for(let i=0;i<prefix.length;i++){
            const char=prefix[i]
            if(!node.childrens[char]){
                return null
            }
            node=node.childrens[char]
        }
        return node
    }   

collectSuggestions(node,sample=[]){ 
    if(node.EndWord){
       sample.push(...node.suggestion)
    }
    for(const char in node.childrens){
        this.collectSuggestions(node.childrens[char],sample)
    }
    return sample
}
    
    
}
const tire = new trie()
tire.insert('apple')
tire.insert('appy juice')
tire.insert('elephant soop')
console.log('After auto complete = ',tire.autocomplete('app'));

