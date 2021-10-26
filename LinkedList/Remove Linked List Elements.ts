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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return head;
  let prev: ListNode | null = null;
  let temp: ListNode | null = head;
  while (temp) {
    if (temp.val === val) {
      if (!prev) {
        head = head!.next;
        temp = head;
        continue;
      } else {
        prev.next = temp.next;
        temp = prev;
      }
    }
    prev = temp;
    temp = temp!.next;
  }

  return head;
}

let head = new ListNode(7);
head.next = new ListNode(7);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(7);
console.log(removeElements(head, 7));
