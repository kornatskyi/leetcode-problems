function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

    if (!head || !head.next) return head
    if (k === 0) return head
    let temp = head

    let l = 0

    while (temp.next) {
        temp = temp.next
        l++
    }
    temp.next = head
    temp = head
    for (let i = 0; i < Math.abs(l - (k % (l + 1))); i++) {
        temp = temp.next
    }
    head = temp.next
    temp.next = null

    return head

};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

console.log(rotateRight(head, 6));
