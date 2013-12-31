exports.TestSort = {
    randomArray: function() {
        var max  = 100,
            len = parseInt(Math.random() * 10) + 10,
            a   = new Array(len);
        for(var i = 0; i < len; i++) {
            a[i] = parseInt(Math.random() * 100);
        }

        a.toString = function() {
            return '[' + this.join(',') + ']';
        }

        return a;
    },

    test: function(fn) {
        var a = this.randomArray(),
            after;
        console.log('Before Sort: '  + a.toString());
        console.log('After Sort: '   + (after = fn(a)));
        console.log('The result is ' + (after == a.sort()));
    }
};
