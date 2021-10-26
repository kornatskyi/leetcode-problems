class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n < 1:
            return False
        if n == 1:
            return True

        while n != 1.0:
            if n % 3 > 0:
                return False
            n = n / 3
        return True


s = Solution()

print(s.isPowerOfThree(1))
