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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {


    let head = new ListNode()
    let temp = head
    let trigger = true

    while (lists) {
        trigger = true
        let minIndex = -1
        let min = new ListNode(10 ** 4 + 1)
        for (let i = 0; i < lists.length; i++) {

            if (lists[i]) {
                if (min.val > lists[i].val) {
                    trigger = false
                    min = lists[i]
                    minIndex = i


                }
            }

        }
        if (minIndex > -1) {
            lists[minIndex] = lists[minIndex].next
        }
        if (trigger) {
            lists = null
            min = null
        }

        temp.next = min
        temp = temp.next
    }

    return head.next

};


const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(12)
node1.next.next.next = new ListNode(13)

const node2 = new ListNode(4)
node2.next = new ListNode(6)
node2.next.next = new ListNode(7)


const node3 = new ListNode(1)
node3.next = new ListNode(3)
node3.next.next = new ListNode(4)
node3.next.next.next = new ListNode(10)

// console.log(JSON.stringify(mergeKLists([node1, node2, node3])));
console.log(JSON.stringify(mergeKLists([node1])));















