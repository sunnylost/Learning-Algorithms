import { exchange } from './util'

export default function InsertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            exchange(arr, j, j - 1)
        }
    }
    return arr
}
