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
var reverseList = function (head) {
    if (!head) return null
    if (!head.next) return head
    let tail = new ListNode()
    const resultHead = tail
    function recursion(node) {

        const tempNode = node
        if (node.next) {

            recursion(node.next)
        }

        tail.next = new ListNode(tempNode.val)
        tail = tail.next

    }
    recursion(head)
    return resultHead.next

};

