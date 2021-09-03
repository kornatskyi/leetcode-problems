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





var removeNthFromEnd = function (head, n) {

    const linkedList = new LinkedList(head)

    if (n === 1 && 1 === linkedList.size()) {
        return null;
    }
    if (n === linkedList.size() && n > 1) {
        linkedList.head = linkedList.head.next;
        return linkedList.head;
    }
    const elementIndexFromStart = linkedList.size() - 1 - n;
    let i = 0;

    function recursion(node) {

        if (i === elementIndexFromStart) {



            node.next = node.next.next;
            return
        }
        i++;

        recursion(node.next)


    }

    recursion(linkedList.head)

    return linkedList.head



};









//tests
test(removeNthFromEnd, { head: arrayToLinkedList([1, 2, 3, 4, 5]).getFirst(), n: 2 }, [1, 2, 3, 5]);
test(removeNthFromEnd, { head: arrayToLinkedList([1]).getFirst(), n: 1 }, []);
test(removeNthFromEnd, { head: arrayToLinkedList([1, 2]).getFirst(), n: 1 }, [1]);
test(removeNthFromEnd, { head: arrayToLinkedList([2, 3, 1, 7]).getFirst(), n: 1 }, [2, 3, 1]);
test(removeNthFromEnd, { head: arrayToLinkedList([1, 2, 3, 4]).getFirst(), n: 4 }, [2, 3, 4]);



function test(func, input, output) {

    if (arraysEqual(linkedListToArray(new LinkedList(func(input.head, input.n))), output)) {
        console.log("For ", input.head, " PASSED!!!");
    } else {
        console.log("For ", input, " FAILED!!!");
    }

}


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}