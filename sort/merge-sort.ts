//http://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F

export default function MergeSort(arr: number[]) {
    function merge(arr: number[], l: number, m: number, r: number) {
        const tmp: number[] = []
        let i = 0
        let j = l
        let k = m + 1

        while (j <= m || k <= r) {
            if (j > m) {
                tmp[i++] = arr[k++]
            } else if (k > r) {
                tmp[i++] = arr[j++]
            } else {
                tmp[i++] = arr[k] > arr[j] ? arr[j++] : arr[k++]
            }
        }

        for (let i = 0; i < tmp.length; i++) {
            arr[l + i] = tmp[i]
        }
    }

    function partition(arr: number[], left: number, right: number) {
        if (left === right) {
            return
        }

        const middle = (left + (right - left) / 2) >>> 0
        partition(arr, left, middle)
        partition(arr, middle + 1, right)
        merge(arr, left, middle, right)
    }

    partition(arr, 0, arr.length - 1)

    return arr
}
