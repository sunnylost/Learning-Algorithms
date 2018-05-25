//http://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F

function mergeSort(a) {
    let len = a.length
    let m = (len / 2) >>> 0
    let fn = mergeSort
    let left
    let right

    if (len < 2) {
        return a
    }

    left = a.slice(0, m)
    right = a.slice(m)

    return fn.merge(fn(left), fn(right))
}

mergeSort.merge = function(a, b) {
    let r = []

    while (a.length && b.length) {
        r.push(a[0] < b[0] ? a.shift() : b.shift())
    }

    return r.concat(a.concat(b))
}

module.exports = mergeSort
