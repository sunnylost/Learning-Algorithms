export type Node<T> = {
    left: Node<T> | null
    right: Node<T> | null
    value: T
}
