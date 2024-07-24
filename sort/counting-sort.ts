/**
 * arr 中的值在 0..arr.length - 1 之间
 * @param arr
 * @param K
 * @constructor
 */
export default function CountingSort(arr: number[], K: number) {
    const len = arr.length
    const C = Array(K + 1).fill(0)
    const B = Array(len).fill(0)

    // 每个数字出现的频率
    for (let i = 0; i < len; i++) {
        C[arr[i]] += 1
    }

    // 小于等于 i 位置数字的个数
    for (let i = 1; i <= K; i++) {
        C[i] += C[i - 1]
    }

    for (let i = len - 1; i >= 0; i--) {
        B[C[arr[i]] - 1] = arr[i]
        C[arr[i]]--
    }

    return B
}

console.log(CountingSort([2, 5, 3, 0, 2, 3, 0, 3], 5))
