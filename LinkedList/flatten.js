

function DoubledListNode(val, prev, next, child) {
  this.val = (val === undefined ? 0 : val)
  this.prev = (prev === undefined ? null : prev)
  this.next = (next === undefined ? null : next)
  this.child = (child === undefined ? null : child)
}

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head

  let cur = head;

  function getLast(cur) {

    if (cur.child !== null && cur.next === null) {
      cur.child.prev = cur;
      let last = getLast(cur.child);
      last.next = cur.next;
      cur.next = cur.child
      cur.child = null
    }

    while (cur.next !== null) {
      if (cur.child !== null) {
        cur.child.prev = cur;
        let last = getLast(cur.child);
        last.next = cur.next;
        cur.next.prev = last;
        cur.next = cur.child
        cur.child = null
      }
      cur = cur.next;
    }



    return cur;
  }

  getLast(cur);
  return cur
};

const node1 = new DoubledListNode(1)
node1.next = new DoubledListNode(2)
const node2 = node1.next
node2.prev = node1

node2.next = new DoubledListNode(3)
const node3 = node2.next
node3.prev = node2

node3.child = new DoubledListNode(7)
const node7 = node3.child

node7.next = new DoubledListNode(8)
const node8 = node7.next
node8.prev = node7

node8.child = new DoubledListNode(11)
const node11 = node8.child
node11.next = new DoubledListNode(12)
const node12 = node11.next
node12.prev = node11

node8.next = new DoubledListNode(9)
const node9 = node8.next
node9.prev = node8

node9.next = new DoubledListNode(10)
const node10 = node9.next
node10.prev = node9

node3.next = new DoubledListNode(4)
const node4 = node3.next
node4.prev = node3

node4.next = new DoubledListNode(5)
const node5 = node4.next
node5.prev = node4

node5.next = new DoubledListNode(6)
const node6 = node5.next
node6.prev = node5




// console.log(flatten(new DoubledListNode(1, null, null, new DoubledListNode(2))));
console.log(flatten(node1));



