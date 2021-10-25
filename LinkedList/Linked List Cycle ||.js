function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Modified linked list
var detectCycle = function (head) {


    let trigger = true
    let temp = head
    while (trigger) {
        if (temp === null) { return null }

        if (temp.func !== undefined) {
            trigger = false
            temp.func()
        } else {
            temp.func = function () {
                return this
            }
            temp = temp.next
        }
    }
    return temp

};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = head.next
console.log(detectCycle(head));