import { exchange } from '../sort/util'

type Comparator<T> = (a: T, b: T) => boolean

export default class Heap<T = number> {
    size = 0
    list: T[]
    comparator: (a: number, b: number) => boolean

    constructor(size?: number, comparator?: Comparator<T>) {
        this.list = []

        if (size) {
            this.size = size
        }

        const _comparator =
            comparator || ((a: T, b: T) => (a as unknown as number) - (b as unknown as number) < 0)

        this.comparator = (a: number, b: number) => {
            return _comparator(this.list[a], this.list[b])
        }
    }

    private swim(k: number) {
        while (k > 0) {
            const pIndex = ((k - 1) / 2) >>> 0

            if (this.comparator(pIndex, k)) {
                exchange(this.list, k, pIndex)

                k = pIndex
            } else {
                break
            }
        }
    }

    private sink(k: number) {
        while (k * 2 + 1 < this.size) {
            let i = k * 2 + 1

            if (i + 1 < this.size && this.comparator(i, i + 1)) {
                i += 1
            }

            if (!this.comparator(k, i)) {
                break
            }
            exchange(this.list, k, i)
            k = i
        }
    }

    // add element
    insert(item: T) {
        this.list.push(item)
        this.swim(this.size)
        this.size++
    }

    // remove heap top
    pop() {
        const max = this.list[0]
        exchange(this.list, 0, this.size)
        this.size--
        this.sink(0)
        this.list.length = this.size
        return max
    }

    sort() {
        while (this.size !== 1) {
            exchange(this.list, 0, this.size - 1)
            this.size--
            this.sink(0)
            // console.log('sort', this.list)
        }
    }
}

export class MaxQ<T> extends Heap<T> {
    constructor(arr: T[]) {
        super()
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i])
        }
    }
}

export class MinQ<T> extends Heap<T> {
    constructor(arr: T[]) {
        super(0, (a, b) => (a as unknown as number) - (b as unknown as number) > 0)

        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i])
        }
    }
}
