

from typing import List

"""
nums = [3, 3,2,5, 5,2,13,15, 6,3]
"""

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dups = dict()
        
        for i, n in enumerate(nums):
          print(i)
          if dups.get(n) != None :
            dups[n].append(i)
          else:
            dups[n] = []
            dups[n].append(i)

        print(dups)
        for n in dups.keys():

          if len(dups.get(n)) > 1:
            for i, ni in enumerate(dups.get(n)[:-1]):
              if abs(ni - dups.get(n)[i + 1]) <= k:
                return True
        return False
        pass
      
print(Solution().containsNearbyDuplicate([1,2,3,1,2,3], 1))
