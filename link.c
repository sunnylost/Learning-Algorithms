#include <stdlib.h>
#include <stdio.h>

#define FALSE 0
#define TRUE  1

/*
typedef struct NODE {
    struct NODE *link;
    int value;
} Node;

int sll_insert(Node **linkp, int new_value) {
    register Node *current;
    register Node *new_Node;
     
    while((current = *linkp) != NULL && current->value < new_value) {
        linkp = &current->link;
    }
    new_Node = (Node *)malloc(sizeof *current);

    if(new_Node == NULL) return FALSE;

    new_Node->value = new_value;
    new_Node->link = current;
    *linkp = new_Node;
    return TRUE;
}
*/

typedef struct NODE {
    NODE *fwd;
    NODE *bwd;
    int value;
} Node;

int dll_insert(Node *rootp, int value) {
    Node *this_node, *next_node, *new_node;
    for(this_node = rootp; (next_node = this_node->fwd) != NULL; this_node = next_node) {
        if(next_node->value == value) return 0;
        if(next_node->value > value) break;
    }
    new_node = (Node *)malloc(sizeof Node);
    if(new_node == NULL) return -1;

    new_node->value = value;

    new_node->fwd = next_node;
    this_node->fwd = new_node;
    new_node->bwd = this_node != rootp ? this_node : NULL;
    (next_node != NULL ? next_node : rootp)->bwd = new_node;
    return 1;
}

int main() {
    return 0;
}
