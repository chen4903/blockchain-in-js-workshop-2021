import Trie from "./trieTree.js"

/*
    ============================================================
                              doc
    ============================================================
                        @ author: LEVI_104
                        @ lesson: CryptoCurrency-theory lesson-lesson2
                        @ date: 2023/05/26
                        @ university: CUIT
    ============================================================
    # describe: this is the easy implementation of trie.
    # how to use?
    1. create a merkleTree: const trie = new Trie()
    2. insert some word: trie.insert(".......")
    3. search for the word in the trie: trie.search("........"), if it is in the trie it will return true
    # warning!
        1. the delete(word) is not perfect and not robust, it only works normally in this instance,
            it would raise other error if you delete other words
        2. in this version, you should delete the words which in the trie, or it will raise error
 */

// for instance
const trie = new Trie();
// insert few words
trie.insert("CUIT");
trie.insert("CHENQIN");
// search something
console.log(trie.search("CUIT")) // true
console.log(trie.search("chenqin")) // false
trie.delete("CUIT")
console.log(trie.search("CUIT")) // false
console.log(trie.search("CHENQIN")) // true
trie.delete("CHENQIN")
console.log(trie.search("CHENQIN")) // false
trie.delete("nothing") // `there is no word in trie`
trie.insert("CUIT");
console.log(trie.search("CUIT")) // true