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
            let listValues = new String(currentNode.value instanceof (Account) ? currentNode.value.print() : currentNode.value);
            while (currentNode.next) {
                listValues += (` -> ` + new String(currentNode.next.value instanceof (Account) ? currentNode.next.value.print() : currentNode.next.value));
                currentNode = currentNode.next;
            }
            console.log(listValues);
        }
    }

    reverse() {
        if (!this.head) {
            console.log("List is empty");
        } else {
            let currentNode = this.head;
            const listValues: T[] = [];
            listValues.push(currentNode.value);
            while (currentNode.next) {
                listValues.unshift(currentNode.next.value);
                currentNode = currentNode.next;
            }
            console.log(listValues.join(" -> "));

        }
    }

    find(value: T): LinkedListNode<T> | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.head.value === value) {
            return this.head;
        } else {
            let currentNode = this.head.next;
            while (currentNode && currentNode.value != value) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    remove(value: T): boolean {
        if (!this.head) {
            return false;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return true
        } else {
            let previousNode = this.head;
            let currentNode = this.head.next
            while (currentNode && currentNode.value != value) {
                previousNode = currentNode
                currentNode = currentNode.next;
            }
            if (!currentNode) {
                return false;
            } else {
                previousNode.next = currentNode.next;
                return true;
            }
        }
    }
}

function removeDuplicate<T>(list: LinkedList<T>): LinkedList<T> {
    let current = list.head;
    const newlistValues: T[] = [];
    while (current) {
        newlistValues.push(current.value);
        current = current.next;
    }
    const results = newlistValues.filter((e, index) => newlistValues.indexOf(e) === index);

    const newList = new LinkedList<T>();
    for (const e of results) {
        newList.append(new LinkedListNode<T>(e));
    }

    return newList;
}

function reverseList<T>(list: LinkedList<T>): LinkedList<T> {
    let current = list.head;
    const newlistValues: T[] = [];
    while (current) {
        newlistValues.unshift(current.value);
        current = current.next;
    }

    const newList = new LinkedList<T>();

    for (const e of newlistValues) {
        newList.append(new LinkedListNode<T>(e));
    }

    return newList;
}

class Account {
    accountNumber: string;
    balance: number;
    accountType: "savings" | "checking";

    constructor(accountNumber: string, balance: number, accountType: "savings" | "checking") {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
    }

    print() {
        return this.accountNumber;
    }
}

const accountList = new LinkedList<Account>();

const melanie = new Account("1125885", 850, "savings");
const moises = new Account("2558652", 2000, "checking");
const alan = new Account("9998858", 150000, "savings");

const acct1 = new LinkedListNode<Account>(melanie);
const acct2 = new LinkedListNode<Account>(moises);
const acct3 = new LinkedListNode<Account>(alan);

accountList.append(acct1);
accountList.append(acct2);
accountList.append(acct3);

reverseList(accountList).print();


const list = new LinkedList<number>();
const node1 = new LinkedListNode<number>(23);
const node2 = new LinkedListNode<number>(1);
const node3 = new LinkedListNode<number>(55);
const node4 = new LinkedListNode<number>(78);
const node5 = new LinkedListNode<number>(78);
const node6 = new LinkedListNode<number>(1);
const node7 = new LinkedListNode<number>(1);

list.append(node1);
list.append(node2);
list.append(node3);
list.append(node4);
list.append(node5);
list.append(node6);
list.append(node7);

// list.reverse();
list.print();
reverseList(list).print();
removeDuplicate(list).print();