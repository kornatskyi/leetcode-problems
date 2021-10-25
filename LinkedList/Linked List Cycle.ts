import { ListNode } from "../data_structures/LinkedListLeetCode";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;

  let fast: ListNode | null = head.next;
  let slow: ListNode | null = head;

  while (fast !== null || slow !== null) {
    if (fast === slow) {
      console.log(fast);
      console.log(slow);

      return true;
    }
    slow = slow ? slow.next : null;
    fast = fast ? (fast.next ? fast.next.next : null) : null;
  }
  return false;
}
const head = new ListNode(6);
head.next = new ListNode(3);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(5);
// head.next.next.next = new ListNode(6);
console.log(head);

console.log(hasCycle(head));
