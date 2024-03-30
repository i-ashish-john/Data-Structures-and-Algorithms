class trieNode{
constructor(){
    this.children={}
    this.isWordEnd=false
    }
}
class trie{
    constructor(){
        this.root= new trieNode()

    }

    insert(word){
        let node = this.root
         for (let i=0;i<word.length;i++){
              const char = word[i]
              if(!node.children[char]){
                node.children[char]=new trieNode()
              }
              node = node.children[char]
         }
         node.isWordEnd=true;
    }

    search(word){
       let node = this.root
        for(let i=0;i< word.length;i++){
            const char = word[i]
            if(!node.children[char]){
                return false;
            }
            node=node.children[char]
            
        }
        return  node.isWordEnd// console.log("founded ,",);
        // return node.isWordEnd;
    }

    startswith(prefix){
       let node=this.root
        for(let i=0;i<prefix.length;i++){
            const char = prefix[i]
            if(!node.children[char]){
                console.log('Not thier');
                return false;
            }
            node = node.children[char]
        }

    }

}
const trier = new trie()

trier.insert('Apple')
trier.insert('Ball')
trier.insert('cat')
trier.insert('dog')
trier.insert('elephant')
trier.insert('fridge')

console.log("result is :",trier.search('Ball'));




