let { less, exch } = require('./util')

module.exports = a => {
    let len = a.length
    let h = 1

    while (h < len / 3) {
        h = h * 3 + 1
    }

    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h && less(a[j], a[j - h]); j -= h) {
                exch(a, j, j - h)
            }
        }
        h = (h / 3) >>> 0
    }

    return a
}
