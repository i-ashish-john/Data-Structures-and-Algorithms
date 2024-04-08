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
        let root=this.root

        for(let i=0;i<word.length;i++){
            const char = word[i]
            if(!root.children[char]){
                root.children[char]=new Node()
            }
            root=root.children[char]
        }
        root.WordEnd=true
    }

    search(word){
        let root=this.root
        for(let i=0;i<word.length;i++){
            const value= word[i]
            if(!root.children[value]){
                root.children[value]=new Node()
            }
            root=root.children[value]
        }
        return root.WordEnd
    }

    // startwith(prefix){
    //     let root= this.root
    //     for(let i=0;i<prefix.length;i++){
    //         const
    //     }
    // }



 }

 const trieNode = new tire()
 trieNode.insert('apple')
 trieNode.insert('orange')
 trieNode.insert('grapes')
 trieNode.insert('banana')
 trieNode.insert('jackfruit')
 trieNode.insert('pineapple')
 trieNode.insert('watermelon')

 console.log(trieNode.search('apple'))
 console.log();