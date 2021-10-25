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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return head;
  if (head.next === null && n === 1) {
    return null;
  }
  let temp: ListNode | null = head;
  let prev: ListNode | null = head;

  let l = 0;
  while (temp !== null) {
    temp = temp.next;
    l++;
  }
  temp = head;
  let k = l - n;
  if (k === 0) return head.next;

  for (let i = 0; i < k; i++) {
    prev = temp;
    temp = temp.next;
    if (temp === null) return head;
  }
  if (temp!.next === null) {
    prev!.next = null;
    return head;
  }
  prev!.next = temp!.next;
  return head;
}

let head = new ListNode(1);
head.next = new ListNode(2);

// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
console.log(JSON.stringify(removeNthFromEnd(head, 2)));
