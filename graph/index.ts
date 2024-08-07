export class Edge {
    weight: number
    from: Node
    to: Node

    constructor(weight: number, from: Node, to: Node) {
        this.weight = weight
        this.from = from
        this.to = to
    }
}

export class Node {
    value: number
    in = 0
    out = 0
    nexts: Node[]
    edges: Set<Edge>

    constructor(value: number) {
        this.value = value
        this.nexts = []
        this.edges = new Set()
    }
}

export class Graph {
    nodes: Map<number, Node>
    edges: Set<Edge>

    constructor() {
        this.nodes = new Map()
        this.edges = new Set()
    }
}

/**
 * 宽度优先遍历
 * @param node
 */
function bfs(node: Node) {
    if (!node) {
        return
    }

    // 使用队列
    const queue: Node[] = []
    // 防止死循环，图是可以有环的
    const set = new Set<Node>()

    queue.unshift(node)
    set.add(node)

    while (queue.length) {
        const cur = queue.pop()

        // for ts
        if (!cur) {
            return
        }

        console.log(cur.value)

        for (const next of cur.nexts) {
            if (!set.has(next)) {
                set.add(next)
                queue.unshift(next)
            }
        }
    }
}

/**
 * 深度优先遍历
 * @param node
 */
function dfs(node: Node) {
    if (!node) {
        return
    }

    // 使用栈
    const stack: Node[] = []
    // 防止死循环，图是可以有环的
    const set = new Set<Node>()

    stack.push(node)
    set.add(node)

    while (stack.length) {
        const cur = stack.pop()

        // for ts
        if (!cur) {
            return
        }

        for (const next of cur.nexts) {
            /**
             * 虽然这是个 for 循环，但只获取一次没有遍历过的节点，将这个节点
             * 的一个 next 节点放入到栈中，然后 break 循环，再次从新的节点
             * 开始处理。
             * 所以要把 cur 再次放入栈中，因为它可能还有未处理的 nexts 节点
             */
            if (!set.has(next)) {
                stack.push(cur)
                stack.push(next)
                set.add(next)
                console.log(next.value)
                // 注意这里 break
                break
            }
        }
    }
}
