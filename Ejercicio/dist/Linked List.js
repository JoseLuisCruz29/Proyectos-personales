"use strict";
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}
class LinkedList {
    append(newNode) {
        if (!this.head) {
            this.head = newNode;
        }
        else {
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
        }
        else {
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
        }
        else {
            let currentNode = this.head;
            let listValues = [];
            while (currentNode) {
                listValues.unshift(new String(currentNode.value).toString());
                currentNode = currentNode.next;
            }
            console.log(listValues.join(" -> "));
        }
    }
    reversedList() {
        let prev;
        let current = this.head;
        let next;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    removeDuplicate() {
    }
}
const node1 = new LinkedListNode(125);
const node2 = new LinkedListNode(212);
const node3 = new LinkedListNode(345);
const node4 = new LinkedListNode(4151);
const list = new LinkedList();
list.append(node1);
list.append(node2);
list.append(node3);
list.append(node4);
console.log("Lista en orden normal:");
list.print();
console.log("Lista en orden inversa:");
list.reversedPrint();
