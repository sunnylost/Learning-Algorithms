export class Node<T> {
    value: T
    next: Node<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

export class DoubleNode<T> {
    value: T
    pre: DoubleNode<T> | null = null
    next: DoubleNode<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

export class LinkedList<T> {
    first: Node<T> | null = null

    constructor(first?: Node<T>) {
        if (first) {
            this.first = first
        }
    }

    insert(value: T) {
        const newNode = new Node(value)

        if (!this.first) {
            this.first = newNode
        } else {
            let current = this.first

            while (current.next) {
                current = current.next
            }

            current.next = newNode
        }
    }

    delete(k: number) {
        if (k <= 0 || !this.first) {
            return null
        }

        if (k === 1) {
            const deleteNode = this.first
            this.first = this.first.next
            return deleteNode
        }

        let current = this.first

        for (let i = 1; i < k - 1; i++) {
            if (!current.next) {
                return null
            }
            current = current.next
        }

        const deleteNode = current.next

        if (deleteNode) {
            current.next = deleteNode.next
            deleteNode.next = null
        }

        return deleteNode
    }

    deleteNode(node: Node<T> | null) {
        if (!this.first || !node) {
            return
        }

        if (this.first === node) {
            this.first = this.first.next
        } else {
            let current = this.first

            while (current.next && current.next !== node) {
                current = current.next
            }

            if (current.next) {
                current.next = current.next.next
            }
        }

        node.next = null
    }

    find(value: T) {
        let current = this.first

        while (current) {
            if (current.value === value) {
                return current
            }

            current = current.next
        }

        return null
    }

    removeAfter(node: Node<T>) {
        if (!node) {
            return
        }

        node.next = node.next?.next ?? null
    }

    insertBefore(nodeA: Node<T> | null, nodeB: Node<T>) {
        if (!nodeA || !nodeB || !this.first) {
            return
        }

        if (this.first === nodeA) {
            nodeB.next = this.first
            this.first = nodeB
        } else {
            let current = this.first

            while (current.next && current.next !== nodeA) {
                current = current.next
            }

            if (current.next === nodeA) {
                nodeB.next = nodeA
                current.next = nodeB
            }
        }
    }

    insertAfter(nodeA: Node<T>, nodeB: Node<T>) {
        if (!nodeA || !nodeB) {
            return
        }

        nodeB.next = nodeA.next
        nodeA.next = nodeB
    }

    remove(value?: T) {
        if (!this.first) {
            return
        }

        while (this.first && this.first === value) {
            this.first = this.first.next
        }

        let current = this.first

        while (current && current.next) {
            if (current.next.value === value) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
    }

    max() {
        let current = this.first
        let maxValue = 0

        while (current) {
            maxValue = Math.max(maxValue, current.value as unknown as number)
            current = current.next
        }

        return maxValue
    }

    reverse() {
        let current = this.first
        let pre: Node<T> | null = null

        while (current) {
            const next = current.next
            current.next = pre
            pre = current
            current = next
        }

        this.first = pre
    }
}

export class LinkedListWithCircle<T> {
    first: Node<T> | null = null
    last: Node<T> | null = null

    constructor(first?: Node<T>) {
        if (first) {
            this.first = first
            this.last = first
            first.next = first
        }
    }

    insert(value: T) {
        const newNode = new Node(value)

        if (this.last) {
            newNode.next = this.last.next
            this.last.next = newNode
            this.last = newNode
        } else {
            this.first = newNode
            this.last = newNode
            newNode.next = newNode
        }
    }

    deleteNode(node: Node<T> | null) {
        if (!this.first || !node) {
            return
        }

        if (this.first === node) {
            if (this.first === this.last) {
                this.first = null
                this.last = null
            } else {
                this.last!.next = this.first.next
                this.first = this.first.next
            }
        } else {
            let current = this.first

            while (current.next && current.next !== this.first) {
                if (current.next === node) {
                    if (node === this.last) {
                        this.last = current
                    }
                    node.next = null
                    return node
                }
                current = current.next
            }
        }
        return null
    }
}

export class DoubleLinkedList<T> {
    first: DoubleNode<T> | null = null

    constructor(first?: DoubleNode<T> | null) {
        this.first = first ?? null
    }

    insertFirst(node: DoubleNode<T>) {
        if (!node) {
            return
        }

        if (this.first) {
            node.next = this.first
            this.first.pre = node
        }

        this.first = node
    }

    insertLast(node: DoubleNode<T>) {
        if (!node) {
            return
        }

        if (!this.first) {
            this.first = node
        } else {
            let current = this.first

            while (current.next) {
                current = current.next
            }

            current.next = node
            node.pre = current
        }
    }

    removeFirst() {
        if (!this.first) {
            return null
        }

        const removeNode = this.first
        this.first = removeNode.next

        if (this.first) {
            this.first.pre = null
        }

        removeNode.next = null
        return removeNode
    }

    removeLast() {
        if (!this.first) {
            return null
        }

        let current = this.first

        if (!current.next) {
            this.first = null
            return current
        }

        while (current.next) {
            current = current.next
        }

        if (current.pre) {
            current.pre.next = null
        }
        current.pre = null
        return current
    }
}

export function display(list: LinkedList<any> | DoubleLinkedList<any> | LinkedListWithCircle<any>) {
    const first = list.first
    let node: Node<any> | DoubleNode<any> | null = null
    let indent = 0

    if (!first) {
        return
    }

    while (node !== first) {
        if (!node) {
            node = first
        }
        console.log(' '.repeat(indent), node.value)
        node = node.next
        indent += 2

        if (!node) {
            return
        }
    }
}
