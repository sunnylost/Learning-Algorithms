import { exchange } from './util'

export default function SelectionSort(arr: number[]) {
    const len = arr.length
    let min: number
    let minIndex: number

    for (let i = 0; i < len; i++) {
        min = arr[i]
        minIndex = i

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }

        exchange(arr, i, minIndex)
    }

    return arr
}
