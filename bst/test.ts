import { BST, isSameTree, isValidBST } from './index'
import type { Node } from './type'

const maxDepth = 20
const maxValue = 100

function randomValue(min = 0, max = maxValue) {
    return min + ((Math.random() * maxValue) >>> 0)
}

export function randomTree() {
    function generate(root: Node<number>, curDepth: number) {
        if (!curDepth) {
            return
        }

        root.left = {
            value: randomValue(),
            left: null,
            right: null
        }

        root.right = {
            value: randomValue(),
            left: null,
            right: null
        }

        generate(root.left, curDepth - 1)
        generate(root.right, curDepth - 1)
    }

    const depth = (Math.random() * maxDepth) >>> 0
    const rootNode: Node<number> = {
        value: randomValue(),
        left: null,
        right: null
    }

    generate(rootNode, depth)

    return rootNode
}

function randomValidTree() {
    const tree = new BST<number>()

    tree.insert(15)
    tree.insert(25)
    tree.insert(10)
    tree.insert(7)
    tree.insert(22)
    tree.insert(17)
    tree.insert(13)
    tree.insert(5)
    tree.insert(9)
    tree.insert(27)

    return tree.root
}

console.log(isValidBST(randomTree()))
console.log(isValidBST(randomValidTree()))
console.log(isSameTree(randomTree(), randomValidTree()))
console.log(isSameTree(randomValidTree(), randomValidTree()))
