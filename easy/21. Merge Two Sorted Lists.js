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


var mergeTwoLists = function (l1, l2) {
    let tln = new ListNode()
    let ln = tln

    while (l1 !== null && l2 !== null) {

        if (l1.val < l2.val) {
            tln.next = l1
            l1 = l1.next
        } else {
            tln.next = l2
            l2 = l2.next
        }
        tln = tln.next

    }

    if (l1 !== null) {
        tln.next = l1

    } else {
        tln.next = l2
    }

    return ln.next


};

// console.log(JSON.stringify(resultListNodeHead));

function aTLN(arr) {

    const ln = new ListNode(null)

    let tln = ln


    for (let i = 0; i < arr.length; i++) {

        tln.val = arr[i]
        if (i === arr.length - 1) break;
        tln.next = new ListNode(null)
        tln = tln.next

    }

    return ln

}



// console.log(JSON.stringify(mergeTwoLists(aTLN([1, 2, 4]), aTLN([1, 3, 4]))));
console.log(mergeTwoLists(aTLN([]), aTLN([1, 3, 4])));




















