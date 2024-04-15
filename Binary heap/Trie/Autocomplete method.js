class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.suggestions = []; // List to store words for autocomplete
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      // console.log("iiuit",node);
    }
    node.isEndOfWord = true; 
    node.suggestions.push(word); // Store the word for autocomplete
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  autocomplete(prefix) {
    const node = this.findNode(prefix);//
    if (!node) {
      return [];
    }
    return this.collectSuggestions(node);//
  }

  findNode(prefix) {
    let node = this.root;

    for (const char of prefix) {  

      if (!node.children[char]) {
        return null;
      }

      node = node.children[char];
    }

    return node;
  }
        
  collectSuggestions(node, suggestions = []) {
  // console.log("THe node is =",node.value);
    if (node.isEndOfWord) {
      suggestions.push(...node.suggestions);
    }

    for (const char in node.children) {//here node is this.root!
      this.collectSuggestions(node.children[char], suggestions);
      // console.log('<Suggestion> = ',suggestions); 
    }

    return suggestions;
  }

}

// Example usage:
const trie = new Trie();
trie.insert("apple");
// trie.insert("app");
trie.insert("banana");
trie.insert("car");
trie.insert("cat");
trie.insert("cape");

console.log('Final result is = ',trie.autocomplete("app")); // Output: ["apple", "ape"]
console.log('Final result is = ',trie.autocomplete("b")); // Output: ["car", "cat", "cape"]
console.log('Final result is = ',trie.autocomplete("xyz")); // Output: []