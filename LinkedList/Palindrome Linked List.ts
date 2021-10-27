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

// Reversing second half of a linked list method

function isPalindrome(head: ListNode | null): boolean {
  // Check trivial cases
  if (head === null) return false;
  if (head.next === null) return true;

  // Create node that will point to ether middle node of a list
  // or last node of a firs half of a list
  let middle: ListNode | null = null;
  // Variable that will store list length
  let length = 0;
  // Temporary node variable for iteration through the list (pointer)
  let temp: ListNode | null = head;

  //Count length of the list
  while (temp !== null) {
    temp = temp.next;
    length++;
  }

  // Reset temporary variable for later use
  temp = head;

  // Finding middle node (in case where length % 2 === 0 the middle node will be by index length / 2)
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    middle = temp;
    temp = temp!.next;
  }

  //Reset temp variable again just for reusing as a pointer
  temp = head;

  // Reversing second have of a list. Second optional parameter for the reverseList
  // function is a node to which reversed list will be connected. In this case we connect our firs half to the second one.
  let head2: ListNode | null = reverseList(middle!.next, middle);
  // Creating temporary variable for iteration through the second linked list
  let temp2: ListNode | null = head2;

  // Run loop and on each iteration check if values of each node match, if they are not return false.
  while (temp !== null && temp2 !== null) {
    if (temp.val !== temp2!.val) return false;
    temp = temp.next;
    temp2 = temp2.next;
  }
  // After loop finished and mismatch not found the function return true statement
  return true;

  function reverseList(
    head: ListNode | null,
    previous: ListNode | null = null
  ) {
    // Check trivial cases
    if (head === null || head.next === null) return head;
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    let next: ListNode | null = null;
    // On each iteration we move
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    head = prev;
    // If you reversing link list inside another linked
    // list you can pass previous node as a previous parameter
    // and it'll be connected to the reversed linkedlist head
    if (previous) {
      previous.next = head;
    }
    return head;
  }
}

const head1: ListNode | null = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(3);
head1.next.next.next.next = new ListNode(2);
head1.next.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head1));

const head: ListNode | null = new ListNode(1);
head.next = new ListNode(1);

console.log(isPalindrome(head));

const head2: ListNode | null = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(3);
head2.next.next.next.next.next = new ListNode(3);
head2.next.next.next.next.next.next = new ListNode(1);
head2.next.next.next.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head2));
