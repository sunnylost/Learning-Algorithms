var a = [5, 1, 3, 6, 9, 4, 2],
    i,
    j,
    key,
    len;
for(i = 0, len = a.length; i < len; i++) {
    key = a[i];
    j = i - 1;
    while(j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        j -= 1;
    }
    a[j + 1] = key;
}
console.log(a);
