/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */



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


var middleNode = function (head) {
    let innerHead = head
    let counter = 0
    while (innerHead !== null) {
        innerHead = innerHead.next
        counter++;
    }


    for (let i = 0; i <= Math.floor(counter / 2) + 1; i++) {

        if (i === Math.floor(counter / 2)) {
            return head;
        }
        head = head.next

    }

};

console.log(middleNode(arrayToLinkedList([1, 2, 3, 4, 5]).getFirst()));
console.log(middleNode(arrayToLinkedList([1, 2, 3, 4, 5, 6]).getFirst()));




[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6]
[1, 2, 3]
[1, 2, 5, 6]
[1, 2, 3, 4, 5, 6, 22, 33, 55]
[1]
[1, 1]
[1, 2]
[1]


// [3, 4, 5]
// [4, 5, 6]
// [2, 3]
// [5, 6]
// [5, 6, 22, 33, 55]
// [1]
// [1]
// [2]
// [1]