# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None ):
        self.val = val
        self.next: ListNode = next


# Solution 1
# class Solution:
#     def deleteDuplicates(self, head: ListNode) -> ListNode:
#       if head == None or head.next == None:
#         return head
      
#       result = set()
#       result.add(head.val)
#       temp = head
#       while temp.next != None:
#         result.add(temp.next.val)
#         temp = temp.next
#       result = list(result)
#       result.sort()
#       new_head = ListNode(result[0])
#       temp = new_head
#       for v in result[1:]:
#         temp.next = ListNode(v)
#         temp = temp.next
#       return new_head

# Solution 2
class Solution:
    """
    create result linked list
    Lets go over linked list
    and if next value != the last added value to a new linked list,
    then add that value to new linked list,
    otherwise just keep going
    """
    def deleteDuplicates(self, head: ListNode) -> ListNode:
      if head == None or head.next == None:
        return head
      result = ListNode(None, ListNode())
      result_temp = result
      temp = head
      while temp != None:
        if result_temp.val != temp.val:
          result_temp.next = ListNode(temp.val)
          result_temp = result_temp.next
        temp = temp.next
      return result.next


def print_ll(h: ListNode):
  temp = h
  while temp != None:
    print(temp.val)
    temp = temp.next

    
head = ListNode(1, ListNode(1, ListNode(2, ListNode(3, ListNode(3, ListNode(4))))))
print_ll(Solution().deleteDuplicates(head))