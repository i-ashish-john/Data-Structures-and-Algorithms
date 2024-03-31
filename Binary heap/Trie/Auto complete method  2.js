class TrieNode{
    constructor(){
        this.children={}
        this.isEndWord=false
        this.suggestion=[]
    }
}

class trie{
constructor(){
    this.root = new TrieNode()
}

    insert(word) {
        let node = this.root

        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node=node.children[char]
        }
        node.isEndWord = true
        node.suggestion.push(word)
    }

    search(prefix) {
        let node = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }   
        return node.isEndWord; 
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

    collectSuggestion(node, sample=[]) {   
        if (node.isEndWord) {
            sample.push(...node.suggestion)
        }

        for (const char in node.children) { 
            // const char = node.children[i]
            // if (node.children[char]) {
                this.collectSuggestion(node.children[char],sample);
            // }
        }
        // console.log('ewrwrwr = ',sample)
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

console.log('Result =',the.autocomplete('a'));
