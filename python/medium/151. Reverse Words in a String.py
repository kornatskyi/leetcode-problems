"""
sarray = s.split(" ")
result = ""
for sa in sarray:
  result += sa + " "

return result[:-1]

"""


class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        sarray = s.split(" ")
        result = ""
        for i in range(len(sarray)):
            sa = sarray[len(sarray) - 1 - i]
            if sa == "":
                continue
            result += sa + " "

        return result[:-1]
