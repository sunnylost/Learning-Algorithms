#include <stdlib.h>
#include <stdio.h>

#define FALSE 0
#define TRUE  1

typedef struct NODE {
    struct NODE *link;
    int value;
} Node;

int insert(Node **linkp, int new_value) {
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

int main() {
    return 0;
}
