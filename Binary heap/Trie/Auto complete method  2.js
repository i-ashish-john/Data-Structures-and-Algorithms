class TrieNode{
    constructor(){
        this.children={}
        this.isEndWord=false
        this.sample=[]
    }
}

class trie{
constructor(){
    this.root = new TrieNode()
}
insert(word){
 let node= this.root

 for(let i=0;i<word.length;i++){
    const char=word[i]
    if(!node.children[char]){
        node.children[char]=new TrieNode()
    } 
 }
 node.isEndWord=true
 node.sample.push(word)
}

search(prefix){
let node = node.children[char]

 for(let i=0;i<prefix.length;i++){
    const char = prefix[i]

    if(!node.children[char]){
        return false
    }
    return node.isEndWord
 }

}
autocomplete(prefix){
 let node= this.findNode(prefix)
 if(!node){
    return []
}
return this.collectSuggestion(node)

}

findNode(prefix){
let node =this.root

for(let i=0;i<prefix.length;i++){
    const char = prefix[i]

    if(!node.children[char]){
        return null
    }
    node = node.children[char]
}
return node 

}

collectSuggestion(node,sample=[]){
if(!node.isEndWord){
    sample.push(...node.sample)
}
 
for(let i=0;i<node.children.length; i++){//
    const char = node.children[i]
    if(node.children[char]){
        node=node.children[char]
       this.collectSuggestion(node,sample)
    }
}
 return sample

}

}
const the = new trie()
the.insert('apple')
the.insert('ballon')
the.insert('carrot')
the.insert('dolphin')
the.insert('elevator')
the.insert('flight')

the.autocomplete('f')