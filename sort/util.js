module.exports = {
    less(v, w) {
        return v < w
    },
    exch(a, i, j) {
        let tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
    }
}
