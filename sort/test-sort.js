function arrayToString(arr) {
    return '[' + arr.join(',') + ']'
}

module.exports = {
    randomArray: function(max = 100) {
        let len = (10 + Math.random() * 10) >>> 0
        let a = new Array(len)

        for (let i = 0; i < len; i++) {
            a[i] = (Math.random() * max) >>> 0
        }

        return a
    },

    test: function(fn) {
        let a = this.randomArray()
        let afterStr

        console.log('Before Sort: ' + arrayToString(a))
        console.log('After Sort: ' + (afterStr = arrayToString(fn(a))))

        a.sort(function(a, b) {
            return a - b
        })

        console.log(
            'The result is ' +
                (afterStr === arrayToString(a) ? 'Correct!' : 'Wrong!')
        )
    }
}
