import { exchange } from './util'

export function QuickSort(arr: number[]) {
    function partition(arr: number[], lo: number, hi: number) {
        const v = arr[lo]
        let i = lo
        let j = hi + 1

        while (true) {
            while (arr[++i] < v) {
                if (i === hi) {
                    break
                }
            }

            while (arr[--j] > v) {
                if (j === lo) {
                    break
                }
            }

            if (i >= j) {
                break
            }

            exchange(arr, i, j)
        }

        exchange(arr, lo, j)
        return j
    }

    function sort(arr: number[], lo: number, hi: number) {
        if (lo >= hi) {
            return
        }

        const mid = partition(arr, lo, hi)
        sort(arr, lo, mid - 1)
        sort(arr, mid + 1, hi)
    }

    sort(arr, 0, arr.length - 1)

    return arr
}

export function QuickSort2(arr: number[]) {
    function partition(arr: number[], lo: number, hi: number) {
        const v = arr[lo]
        let left = lo - 1
        let right = hi + 1
        let i = lo

        while (i < right) {
            if (arr[i] < v) {
                exchange(arr, i, left + 1)
                left++
                i++
            } else if (arr[i] > v) {
                exchange(arr, i, right - 1)
                right--
            } else {
                i++
            }
        }

        return [left, right]
    }

    function sort(arr: number[], lo: number, hi: number) {
        if (lo >= hi) {
            return
        }

        const [left, right] = partition(arr, lo, hi)
        sort(arr, lo, left)
        sort(arr, right, hi)
    }

    sort(arr, 0, arr.length - 1)
    return arr
}
