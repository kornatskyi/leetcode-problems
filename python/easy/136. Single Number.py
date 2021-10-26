class Solution(object):
    def singleNumber(self, nums):

        dict = {}
        for n in nums:
            if n in dict:
                del dict[n]
            else:
                dict[n] = n
        return list(dict.keys())[0]


object = Solution()
print(object.singleNumber([1, 3, 1, -1, 3]))
