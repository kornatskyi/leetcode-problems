from typing import List

"""
[3,0,6,1,5,4] -> 3
[0, 1, 3, 4, 5, 6]


[ ] -> 4

[3, 2, 1, 0, 2, 3, 3, 1, 0] -> 3
[0,0,1,1,2,2,3,3,3]

[54,67,12,33,69,32, 12, 1] -> 0
 
[1, 12, 12, 32, 33, 54, 67, 69] 
    |
h = 1
"""

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        sortedCitations = sorted(citations)
        h = 0
        for i, cs in enumerate(sortedCitations):

          if cs <= len(sortedCitations[i:]):
            h = cs
          elif h < len(sortedCitations[i:]):
             h = len(sortedCitations[i:])
        
        return h
      
      
print(Solution().hIndex([0, 0 , 0]))