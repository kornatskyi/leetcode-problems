class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = -1, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  get(index: number): number {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      if (temp !== null) {
        temp = temp.next;
      } else {
        break;
      }
    }
    return temp ? temp.val : -1;
  }

  addAtHead(val: number): void {
    // Create node with a given value
    const newNode = new ListNode(val);
    // Assigning head of the LinkedList to the new node's next pointer
    newNode.next = this.head;
    // Now make the new node head of the linked list
    this.head = newNode;
  }

  addAtTail(val: number): void {
    // Check if the head exists, if not create new node and assign to the head
    if (this.head === null) {
      this.head = new ListNode(val);
      return;
    }
    // If head exists go to the last node and assign new node to the next property of the last node
    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new ListNode(val);
  }

  addAtIndex(index: number, val: number): void {
    let temp = this.head;
    let prev;
    for (let i = 0; i < index; i++) {
      if (temp === null) return;
      prev = temp;
      temp = temp!.next;
    }
    if (prev === undefined || prev === null) {
      this.addAtHead(val);
      return;
    }
    prev.next = new ListNode(val);
    prev.next.next = temp;
  }

  deleteAtIndex(index: number): void {
    if (index === 0) {
      this.head = this.head!.next;
    }
    let temp = this.head;
    let prev = temp;
    for (let i = 0; i < index; i++) {
      if (temp === null) return;
      prev = temp;
      temp = temp!.next;
    }
    if (prev === null) return;
    prev.next = temp ? temp!.next : null;
  }
}

const linkedList = new MyLinkedList();
console.log(linkedList);
console.log(linkedList.get(0));
linkedList.addAtHead(1);
console.log(linkedList);
linkedList.addAtTail(3);
console.log(JSON.stringify(linkedList));
linkedList.addAtIndex(0, 12);
linkedList.addAtIndex(0, 10);
console.log(JSON.stringify(linkedList));
linkedList.deleteAtIndex(0);
console.log(JSON.stringify(linkedList));

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
