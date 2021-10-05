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

function linkedListHeadToArray(head) {
    const arr = [head.val]
    while (head.next !== null) {
        arr.push(head.next.val)
        head = head.next
    }
    return arr
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {


    let headCopy = head;
    let length = 0
    while (headCopy !== null) {
        headCopy = headCopy.next
        length++;
    }

    if (n === length) {
        return head.next
    }

    let nodeFromTheBeginning = 0
    headCopy = head;
    while (headCopy !== null) {
        nodeFromTheBeginning++;
        if (nodeFromTheBeginning === length - n) {
            headCopy.next = headCopy.next.next
            return head
        }
        headCopy = headCopy.next
    }


};




function test(result, func, ...args) {


    const fR = linkedListHeadToArray(func(...args));
    console.log(fR);
    if (result.every((e, i) => e === fR[i])) {
        console.log("Pass!");
        return
    }
    console.log("Failed!");
    return
}


test([1, 2, 3, 5], removeNthFromEnd, arrayToLinkedList([1, 2, 3, 4, 5]).getFirst(), 5)

