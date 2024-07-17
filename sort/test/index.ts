import BubbleSort from '../bubble-sort'
import HeapSort from '../heap-sort'
import InsertionSort from '../insertion-sort'
import MergeSort from '../merge-sort'
import { QuickSort, QuickSort2 } from '../quick-sort'
import SelectionSort from '../selection-sort'
import { testFunctions } from './test-sort'

testFunctions([
    BubbleSort,
    SelectionSort,
    InsertionSort,
    MergeSort,
    HeapSort,
    QuickSort,
    QuickSort2
])
