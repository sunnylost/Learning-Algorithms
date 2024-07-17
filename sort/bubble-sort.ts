import { exchange } from './util'

export default function BubbleSort(arr: number[]) {
    let len = arr.length - 1
    let j = 1

    while (len > 0) {
        if (arr[j - 1] > arr[j]) {
            exchange(arr, j, j - 1)
        }

        if (j === len) {
            len--
            j = 1
        } else {
            j++
        }
    }

    return arr
}
