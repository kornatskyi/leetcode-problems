function Node(val, next, random) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
}

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return head

    let newHead = new Node(head.val, null, head.random)
    let newTemp = newHead

    let temp = head
    let l = 1
    while (temp.next) {
        l++
        temp = temp.next
        newTemp.next = new Node(temp.val)
        newTemp.random = temp.random
        newTemp = newTemp.next

    }

    // let tail = temp
    let newTail = newTemp

    // tail.next = newHead
    newTail.next = newHead

    temp = head
    newTemp = newHead


    while (newTemp !== newHead) {
        let randomTemp = newTemp.random
        if (randomTemp) {
            for (let i = 0; i < l; i++) {
                randomTemp = randomTemp.next
            }
        }

        newTemp.random = randomTemp
        temp = temp.next
        newTemp = newTemp.next


    }

    newTail.next = null

    return newHead
};


let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

head.random = head
head.next.random = head.next.next
head.next.next.random = null
head.next.next.next.random = head.next.next


console.log(head);
console.log(copyRandomList(head));






