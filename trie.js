
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
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    delete(word) {
        function _delete(node, word, depth) {
            if (!node) {
                return false;
            }

            if (depth === word.length) {
                if (!node.isEndOfWord) {
                    return false;
                }
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0;
            }

            const char = word[depth];
            if (node.children[char] && _delete(node.children[char], word, depth + 1)) {
                delete node.children[char];
                return Object.keys(node.children).length === 0 && !node.isEndOfWord;
            }

            return false;
        }

        _delete(this.root, word, 0);
    }

    printTrie() {
        function _print(node, currentWord) {
            if (node.isEndOfWord) {
                console.log(currentWord);
            }

            for (let char in node.children) {
                _print(node.children[char], currentWord + char);
            }
        }

        _print(this.root, "");
    }

    printStartWith(prefix){
        let node = this.root

        for(let char of prefix){
            if(!node.childrens[char]){
                return null
            }

            node = node.childrens[char]
        }

        function printt(node, curr){
            if(node.isEnd){
                console.log(curr);
            }

            for(let char in node.childrens){
                printt(node.childrens[char],curr+char)
            }
        }

        printt(node,prefix)
    }
}

// Example usage:
const trie = new Trie();
trie.insert("bat");
trie.insert("ball");
trie.insert("bark");

// Deleting the word "ball"
trie.delete("ball");

// Printing all words in the Trie
console.log("Words in the Trie after deletion:");
trie.printTrie();

// Checking if any words start with "ba"
console.log("\nDoes any word start with 'ba'?");
console.log(trie.startsWith("ba"));  // Should return true

// Searching for the word "ball"
console.log("\nIs 'ball' in the Trie?");
console.log(trie.search("ball"));  // Should return false