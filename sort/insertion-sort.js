function insertionSort(a) {
    var i   = 1,
        len = a.length,
        j, key, tmp;

    for(; i < len; i++) {
        key = a[i];
        j = i - 1;

        while(j >= 0 && (tmp = a[j]) > key) a[--j + 2] = tmp;
        a[j + 1] = key;
    }
    return a;
}

console.log(insertionSort([ 5, 1, 3, 6, 9, 4, 2 ]));
