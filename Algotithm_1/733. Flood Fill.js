/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    const oldColor = image[sr][sc]
    image[sr][sc] = newColor
    let i = 0

    function recursion(x, y) {

        if (i > image.length * image[0].length) {
            return
        }
        i++;
        if (image[x + 1]) {
            if (image[x + 1][y] === oldColor) {
                image[x + 1][y] = newColor
                recursion(x + 1, y)
            }
        }
        if (image[x - 1]) {
            if (image[x - 1][y] === oldColor) {
                image[x - 1][y] = newColor
                recursion(x - 1, y)
            }
        }
        if (image[x][y + 1] === oldColor) {
            image[x][y + 1] = newColor
            recursion(x, y + 1)
        }
        if (image[x][y - 1] === oldColor) {
            image[x][y - 1] = newColor
            recursion(x, y - 1)
        }
        return
    }

    recursion(sr, sc);

    return image

};

// console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
// console.log(floodFill([[0, 0, 0], [0, 1, 0]], 1, 1, 2));
console.log(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1));


[[1, 1, 1], [1, 1, 0], [1, 0, 1], [0, 0, 0], [1, 1, 1]]
1
1
2


[[0, 0, 0], [0, 1, 0]]
1
1
2

