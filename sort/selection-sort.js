module.exports = a => {
    let i = 0
    let len = a.length - 1
    let j
    let min
    let min_index
    let tmp

    for (; i < len; i++) {
        min = a[i]
        min_index = i

        for (j = i + 1; j < len; j++) {
            if (a[j] < min) {
                min = a[j]
                min_index = j
            }
        }

        tmp = a[i]
        a[i] = a[min_index]
        a[min_index] = tmp
    }

    return a
}
