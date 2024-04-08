class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      node = node.children[char];
      // console.log("inserted =", node);
    }

    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

// Example usage:
const triertrie = new Trie();

// Insert words into the trie
trie.insert('apple');
trie.insert('banana');
trie.insert('car');
trie.insert('cat'); 

// Search for a word
console.log(trie.search('apple')); // Output: true
console.log(trie.search('orange')); // Output: false

// Check if a prefix exists
console.log(trie.startsWith('ap')); // Output: true
console.log(trie.startsWith('ba')); // Output: true
console.log(trie.startsWith('xyz')); // Output: false