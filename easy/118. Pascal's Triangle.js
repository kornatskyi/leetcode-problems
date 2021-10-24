/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]


    const resultArray = [[1], [1, 1]]

    for (let i = 2; i < numRows; i++) {
        const row = []
        row.push(1)
        for (let j = 1; j < i; j++) {
            row.push((resultArray[i - 1][j - 1] + resultArray[i - 1][j]))
        }
        row.push(1)
        resultArray.push(row)
    }

    return resultArray

};

generate(3)