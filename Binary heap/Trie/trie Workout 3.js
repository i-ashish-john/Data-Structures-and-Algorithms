class trieNode{
    constructor(){
        this.children={}
        this.isWordEnd= false
    }
}

class trie{
    constructor(){
        this.root=new trieNode()

    }

    insert(word){
         let node = this.root

         for(let i=0;i< word.length;i++){
            const char = word[i]

            if(!node.children[char]){
                node.children[char]=new trieNode()
            }
            node=node.children[char]
         }
         node.isWordEnd=true
     }

     search(word){
        let node =this.root
        for(let i=0;i<word.length;i++){
            const char= word[i]
            //                      //
            if(!node.children[char]){
                return false
            }
            //                      //
            node=node.children[char]
        }
        return node.children[char]
     }
     
     search(prefix){
        let node = this.root
        for(let i=0;i<prefix.length;i++){
            const char= prefix[i]
        if(!node.children[char]){
            return console.log('Empty')
         }
         node=node.children[char]
        }
        return node.isWordEnd
     }


}
const Trie= new trie()
Trie.insert('alavudhyin')
Trie.insert('Bob')
Trie.insert('cartoon')
Trie.insert('donald duck')
Trie.insert('elephant')



console.log('result is:',Trie.search('cartoon'))
