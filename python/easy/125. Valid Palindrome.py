import re


class Solution(object):
    def isPalindrome(self, s):

        st = re.sub("[^a-zA-Z0-9]", "", s)
        st = st.lower()
        n = len(st)
        if n == 0:
            return True
        i = 0
        j = n - 1
        while st[i] == st[j]:
            if i >= j:
                return True
            i += 1
            j -= 1
        else:
            return False


obj = Solution()

print(obj.isPalindrome("A man, a plan, a canal: Panama"))
