/**
 * https://www.wikiwand.com/en/Josephus_problem
 */

import { LinkedListWithCircle, type Node, display } from '../linked-list'

function josephus(n: number, m: number) {
    const list = generateSequentialList(n)
    display(list)

    let node: Node<number> | null = list.first

    while (node) {
        let i = 1

        while (i !== m) {
            i++
            node = node?.next ?? null
        }

        if (!node) {
            return
        }

        const next = node?.next ?? null
        console.log(node?.value)
        list.deleteNode(node)
        node = next
    }
}

function generateSequentialList(n: number) {
    const list = new LinkedListWithCircle<number>()
    let i = 0

    while (i < n) {
        list.insert(i)
        i++
    }

    return list
}

const n = 7
const m = 2

josephus(n, m)
