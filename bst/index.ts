import type { Node } from './type'

export class BST<T> {
    root: Node<T> | null

    constructor() {
        this.root = null
    }

    insert(value: T) {
        const node = {
            value,
            left: null,
            right: null
        }

        if (!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(node: Node<T>, newNode: Node<T>) {
        if (node.value >= newNode.value) {
            if (node.left) {
                this.insertNode(node.left, newNode)
            } else {
                node.left = newNode
            }
        } else {
            if (node.right) {
                this.insertNode(node.right, newNode)
            } else {
                node.right = newNode
            }
        }
    }
}

export function isValidBST(node: Node<number> | null) {
    if (!node) {
        return false
    }

    let prev = Number.MIN_VALUE

    function isBST(node: Node<number> | null) {
        if (!node) {
            return true
        }

        const isLeftBST = isBST(node.left)

        if (!isLeftBST) {
            return false
        }

        if (prev >= node.value) {
            return false
        }

        prev = node.value

        return isBST(node.right)
    }

    return isBST(node)
}

export function isSameTree<T>(nodeA: Node<T> | null, nodeB: Node<T> | null) {
    function recurse(nodeA: Node<T> | null, nodeB: Node<T> | null) {
        if (!nodeA && !nodeB) {
            return true
        }

        if (!nodeA || !nodeB || nodeA.value !== nodeB.value) {
            return false
        }

        return recurse(nodeA.left, nodeB.left) && recurse(nodeA.right, nodeB.right)
    }

    return recurse(nodeA, nodeB)
}
