export class BitVector {
    array: Uint8Array

    constructor(size: number) {
        this.array = new Uint8Array(Math.ceil(size / 8))
    }

    get(index: number) {
        const numIndex = (index / 8) >>> 0
        const bitIndex = (index % 8) >>> 0
        return (this.array[numIndex] >> bitIndex) & 1
    }

    set(index: number, value: 0 | 1 = 1) {
        const numIndex = (index / 8) >>> 0
        const bitIndex = (index % 8) >>> 0

        if (value === 0) {
            this.array[numIndex] = this.array[numIndex] & ~(1 << bitIndex)
        } else {
            this.array[numIndex] = this.array[numIndex] | (1 << bitIndex)
        }
    }
}
