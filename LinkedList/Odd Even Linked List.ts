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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let temp = head;
  let oddHead: ListNode | null = temp;
  let evenHead: ListNode | null = temp.next;
  let oddTemp: ListNode | null = oddHead;
  let evenTemp: ListNode | null = evenHead;
  temp = temp.next.next;
  let switcher = true;

  while (temp !== null) {
    if (switcher) {
      oddTemp.next = temp;
      oddTemp = oddTemp.next;
    } else {
      evenTemp.next = temp;
      evenTemp = evenTemp.next;
    }
    temp = temp.next;
    switcher = !switcher;
  }
  evenTemp.next = null;
  oddTemp.next = evenHead;

  return oddHead;
}
