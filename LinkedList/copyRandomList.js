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
    // Create new linked list and copy values and random references
    while (temp.next) {
        l++
        temp = temp.next
        newTemp.next = new Node(temp.val)
        newTemp.random = temp.random
        newTemp = newTemp.next

    }

    // Connect tails and heads of 2 linked lists, and make circled linked list
    let tail = temp
    let newTail = newTemp
    tail.next = newHead
    temp = head
    newTemp = newHead
    newTail.next = temp


    // Go through all elements in the first linked list
    while (newTemp !== head) {
        let randomTemp = temp.random
        // If random value not null go through our loop linked lists's length times
        // starting iteration from the initial list, so because now we have a loop after l steps we'll get
        // mirrored element from the second list.
        if (randomTemp) {
            for (let i = 0; i < l; i++) {
                randomTemp = randomTemp.next
            }
        }
        // Assigning the last value of iteration to the random value
        newTemp.random = randomTemp
        temp = temp.next
        newTemp = newTemp.next


    }

    // Separate list, because leetcode complains if you change the initial list.
    // We could create third list and not change initial, but it would take extra linear space
    tail.next = null
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






