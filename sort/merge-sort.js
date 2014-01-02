//http://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F

var TestSort = require('./test-sort').TestSort;

function mergeSort(a) {
    var len = a.length,
        m   = parseInt(len/2),
        fn  = mergeSort,
        left, right;

    if(len < 2) {
        return a;
    }

    left  = a.slice(0, m);
    right = a.slice(m);

    return fn.merge(fn(left), fn(right));
}

mergeSort.merge = function(a, b) {
    var t1, t2,
        r = [];

    while(a.length && b.length) {
        t1 = a[0];
        t2 = b[0];
        r.push(t1 < t2 ? a.shift() : b.shift());
    }

    return r.concat(a.concat(b));
};

TestSort.test(mergeSort);
