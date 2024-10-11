class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | undefined;

    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}

class LinkedList<T> {
    head: LinkedListNode<T> | undefined;
    append(newNode: LinkedListNode<T>) {
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    print() {
        if (!this.head) {
            console.log("List is empty");
        } else {
            let currentNode = this.head;
            let listValues = new String(currentNode.value);
            while (currentNode.next) {
                listValues += (` -> ` + new String(currentNode.next.value));
                currentNode = currentNode.next;
            }
            console.log(listValues);
        }
    }
    reversedPrint() {
        if (!this.head) {
            console.log("List is empty");
        } else {
            let currentNode: LinkedListNode<T> | undefined = this.head;
            let listValues: string[] = [];

            while (currentNode) {
                listValues.unshift(new String(currentNode.value).toString());
                currentNode = currentNode.next;
            }

            console.log(listValues.join(" -> "));
        }
    }
}
const node1 = new LinkedListNode<number>(125);
const node2 = new LinkedListNode<number>(212);
const node3 = new LinkedListNode<number>(345);
const node4 = new LinkedListNode<number>(4151);


const list = new LinkedList<number>();
list.append(node1);
list.append(node2);
list.append(node3);
list.append(node4);


console.log("Lista en orden normal:");
list.print()


console.log("Lista en orden inversa:");
list.reversedPrint()