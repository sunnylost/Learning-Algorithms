function createNextArray(str: string) {
    const strLength = str.length

    if (strLength === 1) {
        return [-1]
    }

    const next = [-1, 0]
    let i = 2
    let cn = 0

    while (i < str.length) {
        if (str[i - 1] === str[cn]) {
            next[i++] = ++cn
        } else if (cn > 0) {
            cn = next[cn]
        } else {
            next[i++] = 0
        }
    }

    return next
}

/**
 * 查找 s2 是不是 s1 的字串，如果是，返回下标位置
 * @param s1
 * @param s2
 */
function kmp(s1: string, s2: string) {
    const next = createNextArray(s2)
    const len1 = s1.length
    const len2 = s2.length

    if (!len1 || !len2 || len2 > len1) {
        return -1
    }

    let i1 = 0
    let i2 = 0

    while (i1 < len1 && i2 < len2) {
        if (s1[i1] === s2[i2]) {
            i1++
            i2++
        } else if (next[i2] === -1) {
            i1++
        } else {
            i2 = next[i2]
        }
    }

    return i2 === len2 ? i1 - i2 : -1
}

console.log(kmp('mississippi', 'issipi'))
