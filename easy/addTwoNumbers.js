/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var addTwoNumbers = function (l1, l2) {



    let pointer = null;
    let trigger = true
    function reversedLl(entryPoint, prev) {

        if (entryPoint.next) {
            reversedLl(entryPoint.next, entryPoint);

        }
        entryPoint.next = prev

        if (trigger && entryPoint.val !== null) {
            pointer = entryPoint
            trigger = false
        }

        return pointer
    }


    function recursion(list1, list2, resultList, buffer) {


        if ((!list1 && !list2) && !buffer) {
            return resultList
        }

        let val1 = list1 ? list1.val : 0
        let val2 = list2 ? list2.val : 0



        resultList = new ListNode((val1 + val2 + buffer) % 10, resultList)


        if ((val1 + val2 + buffer) > 9) {
            buffer = 1
        } else {
            buffer = 0
        }
        return recursion(list1 ? list1.next : null, list2 ? list2.next : null, resultList, buffer)


    }

    return reversedLl(recursion(l1, l2, null, 0), null)
};






function arrayToLinkedList(arr) {

    let entryPoint;
    let theLastNode = null;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        entryPoint = new ListNode(element, theLastNode)
        theLastNode = entryPoint;

    }
    return entryPoint;
}

// // const l1 = [0], l2 = [0]
// const l1 = [2, 4, 3], l2 = [5, 6, 4]
const l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]

console.log(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));





