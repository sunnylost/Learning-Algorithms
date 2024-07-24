export class TrieNode {
    // 途径过当前节点的次数
    pass = 0
    // 当前节点是多少个字符串的尾部
    end = 0
    nexts: (TrieNode | null)[]

    constructor() {
        // 26 个小写字母
        this.nexts = Array(26).fill(null)
    }
}

export class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string) {
        if (!word) {
            return
        }

        const startCode = 'a'.charCodeAt(0)
        let cur = this.root
        cur.pass++

        for (const c of word) {
            const index = c.charCodeAt(0) - startCode

            if (!cur.nexts[index]) {
                cur.nexts[index] = new TrieNode()
            }

            cur = cur.nexts[index]
            cur.pass++
        }
        cur.end++
    }

    /**
     * 检查 word 加入过几次
     * @param word
     */
    search(word: string) {
        if (!word) {
            return 0
        }

        let cur = this.root

        for (const c of word) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0)

            if (!cur.nexts[index]) {
                return 0
            }

            cur = cur.nexts[index]
        }

        return cur.end
    }

    /**
     * 所有加入的字符串中，有多少是以 pre 为前缀
     * @param pre
     */
    prefixNumber(pre: string) {
        if (!pre) {
            return 0
        }

        let cur = this.root

        for (const c of pre) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0)

            if (!cur.nexts[index]) {
                return 0
            }

            cur = cur.nexts[index]
        }

        return cur.pass
    }

    delete(word: string) {
        if (!word) {
            return
        }

        if (this.search(word) === 0) {
            return
        }

        let cur = this.root
        cur.pass--

        for (const c of word) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0)
            const next = cur.nexts[index]

            if (!next) {
                return
            }

            next.pass--

            if (next.pass === 0) {
                cur.nexts[index] = null
                return
            }

            cur = next
        }
        cur.end--
    }
}

const trie = new Trie()
trie.insert('abc')
trie.insert('bae')
trie.insert('ab')
