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

function reverseList(head: ListNode | null): ListNode | null {
  let temp: ListNode | null = head;
  let prev: ListNode | null;

  if (head === null || head.next === null) return head;

  while (head.next) {
    prev = temp;
    temp = head.next;

    head.next = head.next.next;
    temp.next = prev;
  }

  return temp;
}
