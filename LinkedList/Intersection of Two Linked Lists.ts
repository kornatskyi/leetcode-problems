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

// 2 Pointers
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  // Cunt lengths of linked lists

  let p1: ListNode | null = headA;
  let p2: ListNode | null = headB;

  if (p1 === null || p2 === null) {
    return null;
  }

  while (p1 !== p2) {
    p1 = p1!.next;
    p2 = p2!.next;

    if (p1 === p2) {
      return p1;
    }

    if (p1 === null) {
      p1 = headB;
    }

    if (p2 === null) {
      p2 = headA;
    }
  }

  return p1;
}
let head1 = new ListNode(2);
head1.next = new ListNode(6);
head1.next.next = new ListNode(4);

let head2 = new ListNode(3);
head2.next = new ListNode(3);

console.log(getIntersectionNode(head1, head2));

// Count length differences
// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   // Cunt lengths of linked lists

//   let p1: ListNode | null = headA;
//   let p2: ListNode | null = headB;

//   let l1 = 0;
//   let l2 = 0;

//   while (p1 !== null) {
//     p1 = p1!.next;
//     l1 = l1 + 1;
//   }

//   while (p2 !== null) {
//     p2 = p2!.next;
//     l2 = l2 + 1;
//   }

//   p1 = headA;
//   p2 = headB;

//   let diff = Math.abs(l1 - l2);
//   if (l1 > l2) {
//     for (let i = 0; i < diff; i++) {
//       p1 = p1!.next;
//     }
//   } else {
//     for (let i = 0; i < diff; i++) {
//       p2 = p2!.next;
//     }
//   }
//   while (p1 !== null && p2 !== null) {
//     if (p1 === p2) {
//       return p2;
//     }
//     p1 = p1.next;
//     p2 = p2.next;
//   }

//   return null;
// }

// Using hash map
// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   const map: Map<ListNode | null, boolean> = new Map();

//   let p1: ListNode | null = headA;
//   let p2: ListNode | null = headB;

//   while (p1 !== null) {
//     map.set(p1, true);
//     p1 = p1.next;
//   }

//   while (p2 !== null) {
//     if (map.has(p2)) {
//       return p2;
//     }
//     p2 = p2.next;
//   }

//   return null;
// }
