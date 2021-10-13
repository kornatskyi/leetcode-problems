/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {

    const resultArray = [...Array(mat.length)].map(e => Array(mat[0].length))

    const copy = [...mat].map((e, i) => [...mat[i]])


    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[0].length; j++) {
            resultArray[i][j] = recursion(i, j, i, j);
            mat = [...copy].map((e, i) => [...copy[i]])
        }

    }

    function recursion(x, y, x0, y0) {
        if (mat[x]) {


            if (mat[x][y] === 0) {
                return Math.abs(Math.abs(x0) - Math.abs(x) + Math.abs(y0) - Math.abs(y))
                // console.log(counter);
            } else {
                mat[x][y] = '#'
            }
            if (mat[x + 1]) {
                if (mat[x + 1][y] !== '#') {
                    return recursion(x + 1, y, x0, y0)
                }
            }

            if (mat[x - 1]) {
                if (mat[x - 1][y] !== '#') {
                    return recursion(x - 1, y, x0, y0)

                }
            }
            if (mat[y + 1]) {
                if (mat[x][y + 1] !== '#') {
                    return recursion(x, y + 1, x0, y0)

                }
            }
            if (mat[y - 1]) {
                if (mat[x][y - 1] !== '#') {
                    return recursion(x, y - 1, x0, y0)
                }
            }
        } else {
            return 0
        }

    }

    console.log(recursion(1, 1, 1, 1));

    console.log(resultArray.toString());

    return resultArray
};




updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1], [1, 0, 0]])
updateMatrix([[1, 0]])

// [[1, 0]]
// [[0, 0, 0], [0, 1, 0], [1, 1, 1], [1, 0, 0]]






