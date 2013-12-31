var TestSort = require('./test-sort').TestSort;

function selectionSort(a) {
    var i   = 0,
        len = a.length - 1,
        j, min, min_index, tmp;

    for(; i < len; i++) {
        min = a[i];
        min_index = i;

        for(j = i + 1; j < len; j++) {
            if(a[j] < min) {
                min = a[j];
                min_index = j;
            }
        }

        tmp  = a[i];
        a[i] = a[min_index];
        a[min_index] = tmp;
    }

    return a;
}

TestSort.test(selectionSort);
