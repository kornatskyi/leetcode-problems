"""

maxWidth = 20

words = This is the sun
numbOfSpaces = words.length - 2


freeSpace = maxWidth - concat(words).length
8 / 3
___ ___ __

World World World World
11


wordSize = freeSpace / numbOfSpaces


1. first see if I can fit a word inside a row
row = ""
maxWidth = 20
rows = []
for i, w in enumerate(words):
  if i + 1 < len(words):
    if len(row) + len(w) + 1 <= maxWidth:
      if row != "":
        row.append(" " + w)
      else:
        row.append(w )
        
      

2. then figure out hwo to add spaces between the words


|                    |
"""


class Solution(object):
    def fullJustify(self, rowWords, maxWidth):
        """
        :type words: List[str]
        :type maxWidth: int
        :rtype: List[str]
        """
        row = rowWords[0]

        rows = []
        resultRows = []
        for w in rowWords[1:]:
            if len(row) + len(w) + 1 <= maxWidth:
                row = row + " " + w
            else:
                rows.append(row)
                row = w

        rows.append(row)  # append last row

        for row in rows[:-1]:
            rowWords = row.split(" ")
            spacesBetweenWords = len(rowWords) - 1
            if spacesBetweenWords > 0:
                freeSpace = maxWidth - len(row) + spacesBetweenWords
                spaceWidth = int(freeSpace / spacesBetweenWords)
                extraSpace = freeSpace % spacesBetweenWords
                newRow = rowWords[0]
                for word in rowWords[1:]:
                    newRow = (
                        newRow
                        + (spaceWidth * " ")
                        + (" " if extraSpace > 0 else "")
                        + word
                    )
                    extraSpace -= 1
                resultRows.append(newRow)
            else:
                resultRows.append(row + " " * (maxWidth - len(row)))
        resultRows.append(rows[-1] + " " * (maxWidth - len(rows[-1])))
        return resultRows


print(
    Solution().fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
)

"""

























"""
