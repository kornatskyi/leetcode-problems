function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    getFirst = () => {
        return this.head;
    }
    getLast = () => {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    add = (node) => {
        if (this.head === null) {
            this.head = node;
        } else {
            this.getLast().next = node;
        }
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
}

function arrayToLinkedList(array) {

    const linkedList = new LinkedList()
    for (let i = 0; i < array.length; i++) {
        linkedList.add(new ListNode(array[i]))

    }
    return linkedList
}

function linkedListToArray(linkedList) {

    const array = []
    function recursion(node) {
        if (node === null) {
            return
        }
        array.push(node.val);
        recursion(node.next);
    }
    recursion(linkedList.getFirst())
    return array
}