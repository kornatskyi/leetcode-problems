
from typing import List


"""
nums = [3, 1, 2, 5, 6,4]
"""
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(set(nums)) < len(nums)