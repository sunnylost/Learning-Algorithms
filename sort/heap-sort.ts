import { MaxQ } from '../heap'

export default function HeapSort(arr: number[]) {
    const mq = new MaxQ(arr)
    mq.sort()
    return mq.list
}
