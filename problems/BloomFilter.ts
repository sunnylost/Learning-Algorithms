import { BitVector } from './BitVector'

// https://llimllib.github.io/bloomfilter-tutorial/
export class BloomFilter {
    #bitVector: BitVector
    #k = 2
    #size = 0

    constructor(n: number, p: number = 0.001) {
        this.#size = n
        this.#bitVector = new BitVector(n)

        const ln2 = Math.log(2)
        const m = Math.ceil((-n * Math.log(p)) / (ln2 * ln2))
        this.#k = Math.round((m / n) * ln2)
        console.log(this.#k)
    }

    getHash(data: string) {
        const hash1 = hashA(data)
        const hash2 = hashB(data)
        const size = this.#size
        const result = [hash1, hash2]

        for (let i = 1; i < this.#k; i++) {
            result.push(generateHash(i, hash1, hash2, size))
        }

        return result
    }

    add(data: string) {
        this.getHash(data).forEach((hash) => {
            this.#bitVector.set(hash, 1)
        })
    }

    check(data: string) {
        return this.getHash(data).every((hash) => this.#bitVector.get(hash) === 1)
    }
}

// http://willwhim.wpengine.com/2011/09/03/producing-n-hash-functions-by-hashing-only-once/
function fnv1a(data: string) {
    const FNV_offset_basis = 0x811c9dc5
    const FNV_prime = 0x01000193

    let hash = FNV_offset_basis

    for (let i = 0; i < data.length; i++) {
        hash ^= data.charCodeAt(i)
        hash = (hash * FNV_prime) >>> 0
    }

    return hash >>> 0
}

function hashA(str: string) {
    return fnv1a(str)
}

function hashB(str: string) {
    return fnv1a('seed' + str)
}

function generateHash(i: number, a: number, b: number, m: number) {
    return (a + b * i) % m
}

// const bloomFilter = new BloomFilter(1e10)
// bloomFilter.add('ok')
// console.log(bloomFilter.check('ok'))
