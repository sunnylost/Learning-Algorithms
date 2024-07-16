import { DoubleLinkedList, DoubleNode, LinkedList, Node } from '../linked-list'

export class BaseCollection<T> {
    $list: LinkedList<T>
    $size: number

    constructor() {
        this.$list = new LinkedList()
        this.$size = 0
    }

    size() {
        return this.$size
    }

    isEmpty() {
        return this.$size === 0
    }
}

export class Bag<T> extends BaseCollection<T> {
    add(item: T) {
        this.$list.insert(item)
        this.$size++
    }
}

export class Stack<T> extends BaseCollection<T> {
    push(value: T) {
        this.$list.insert(value)
    }

    pop() {
        if (this.$size === 0) {
            return null
        }

        this.$size--
        return this.$list.delete(1)?.value
    }
}

export class Queue<T> extends BaseCollection<T> {
    enqueue(item: T) {
        this.$list.insertBefore(this.$list.first, new Node(item))
        this.$size++
    }

    dequeue() {
        if (this.$size !== 0) {
            return this.$list.delete(this.$size--)
        }

        return null
    }
}

export class Deque<T> {
    list: DoubleLinkedList<T>
    size: number

    constructor() {
        this.list = new DoubleLinkedList()
        this.size = 0
    }

    pushLeft(value: T) {
        this.size++
        const node = new DoubleNode(value)
        this.list.insertFirst(node)
    }

    pushRight(value: T) {
        this.size++
        const node = new DoubleNode(value)
        this.list.insertLast(node)
    }

    popLeft() {
        if (this.size === 0) {
            return null
        }

        this.size--
        return this.list.removeFirst()?.value
    }

    popRight() {
        if (this.size === 0) {
            return null
        }

        this.size--
        return this.list.removeLast()?.value
    }

    getSize() {
        return this.size
    }
}
