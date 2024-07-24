import { less } from '../util'

export function isSorted(a: any[]) {
    for (let i = 1; i < a.length; i++) {
        if (less(a[i], a[i - 1])) {
            return false
        }
    }

    return true
}

const threshold = 200
function arrayToString(arr: number[]) {
    const str = `[${arr.join(',')}]`
    return str.length > threshold ? `${str.substring(0, threshold)}...` : str
}

const defaultMaxLength = 1000
const defaultMaxValue = 100

function randomNumber() {
    return (Math.random() * defaultMaxValue) >>> 0
}

export function randomArray(maxLength = defaultMaxLength, maxValue = defaultMaxValue) {
    const arr: number[] = []

    for (let i = 0; i < maxLength; i++) {
        arr[i] = (Math.random() * maxValue) >>> 0
    }

    return arr
}

type Mode = 'normal' | 'best' | 'worst' | 'duplicate'
function calculateAvgTime(fn: SortFunction, mode: Mode) {
    const times = 100
    let accumulateTime = 0

    for (let i = 0; i < times; i++) {
        let arr = randomArray()

        if (mode === 'best') {
            arr.sort()
        }

        if (mode === 'worst') {
            arr.sort()
            arr.reverse()
        }

        if (mode === 'duplicate') {
            arr = Array(arr.length).fill(randomNumber())
        }

        const start = performance.now()
        fn(arr)
        accumulateTime += performance.now() - start
    }

    return `${(accumulateTime / times).toFixed(4)}ms`
}

type SortFunction = (nums: number[]) => number[]
export function test(fn: SortFunction) {
    const report = {
        name: fn.name,
        isCorrect: false,
        best: '0ms',
        worst: '0ms',
        normal: '0ms',
        duplicate: '0ms'
    }
    const arr = randomArray()

    // console.log(`Test [${fn.name}]`)
    // console.log(`  Before Sort: ${arrayToString(arr)}`)
    // console.log(`  After Sort: ${arrayToString(fn(arr))}`)

    report.isCorrect = isSorted(fn(arr))
    report.normal = calculateAvgTime(fn, 'normal')
    // console.log(`  The result is ${isSorted(arr) ? 'Correct!' : 'Wrong!'}`)
    // console.log(`  Cost ${costTime}ms.\n`)

    // console.log('  Best')
    report.best = calculateAvgTime(fn, 'best')

    // console.log('  Worst')
    report.worst = calculateAvgTime(fn, 'worst')
    report.duplicate = calculateAvgTime(fn, 'duplicate')

    return report
}

export function testFunctions(fns: SortFunction[]) {
    console.table(fns.map((fn) => test(fn)))
}
