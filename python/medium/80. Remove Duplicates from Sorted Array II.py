from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        prev = None 
        secondPrev=None
        i = 0
        k = 0
        while i < len(nums):
          if prev == nums[i]:
            if secondPrev == nums[i]:
              del nums[i]
              continue
            secondPrev = nums[i]
          prev = nums[i]
          i+=1
        return i