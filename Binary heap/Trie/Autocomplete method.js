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
    if (node.isEndOfWord) {
      // console.log('the word =',node.suggestions);
      suggestions.push(...node.suggestions);
    }


    for (const char in node.children) {
      this.collectSuggestions(node.children[char], suggestions);
    }
    return suggestions;
  }

}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("banana");
trie.insert("car");
trie.insert("cat");
trie.insert("cape");

console.log(trie.autocomplete("ap")); // Output: ["apple", "ape"]
console.log(trie.autocomplete("ca")); // Output: ["car", "cat", "cape"]
console.log(trie.autocomplete("xyz")); // Output: []