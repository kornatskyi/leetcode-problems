"""

 1  2  3  4
 5  6  7  8
 9 10 11 12 
13 14 15 16


Flip vertically

Switch elements on each row from beginning and end


Flip by diagonal




"""


class Solution(object):
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        # Flip vertically

        for row in matrix:
            for i in range(int(len(row) / 2)):
                temp = row[i]
                row[i] = row[-1 - i]
                row[-1 - i] = temp
        print(matrix)

        for i in range(len(matrix)):
            for j in range(len(matrix[0]) - i):
                temp = matrix[i][j]
                matrix[i][j] = matrix[-1 - j][-1 - i]
                matrix[-1 - j][-1 - i] = temp
        print(matrix)

        return matrix
"""

4  3  2  1
8  7  6  5
12 11 10 9
16 15 14 13

13  9  5  1
14 10  6  2
15 11  7  3
16  12 8  4 

13 14 15  1
 9 10  6 12
 5 11  7  8
16  2  3  4
"""
Solution().rotate([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
