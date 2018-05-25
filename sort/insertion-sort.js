let { less, exch } = require('./util')

module.exports = a => {
    for (let i = 1; i < a.length; i++) {
        for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) {
            exch(a, j, j - 1)
        }
    }
    return a
}
