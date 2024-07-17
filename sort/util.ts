export function less(v: number, w: number) {
    return v < w
}

export function exchange(a: any[], i: number, j: number) {
    const tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
}
