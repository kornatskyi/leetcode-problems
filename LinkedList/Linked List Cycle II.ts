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
//Two pointers

function detectCycle(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  slow = slow.next;
  fast = fast.next!.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      break;
    }
    if (slow === null) return null;

    slow = slow.next;
    fast = fast.next.next;
  }

  if (slow !== fast) {
    return null;
  }
  slow = head;

  while (slow !== fast) {
    if (slow === null) return null;
    if (fast === null) return null;
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next.next;
console.log(detectCycle(head));

// HashMap method
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

//  function detectCycle(head: ListNode | null): ListNode | null {
//     const map: Map<ListNode, number> = new Map();
//     let temp = head;
//     while (temp !== null) {
//       if (map.get(temp)) {
//         return temp;
//       } else {
//         map.set(temp, 1);
//       }
//       temp = temp.next;
//     }

//     return temp;
//   }
