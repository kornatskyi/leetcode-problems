/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {


    let maxArea = 0
    let counter = 0;
    let j = 0


    function recursion(x, y) {
        if (j > grid.length * grid[0].length) {
            return
        }
        j++;

        if (grid[x + 1]) {
            if (grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2
                counter++;
                recursion(x + 1, y)
            }
        }
        if (grid[x - 1]) {
            if (grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2
                counter++;
                recursion(x - 1, y)
            }
        }
        if (grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2
            counter++;
            recursion(x, y + 1)
        }
        if (grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2
            counter++;
            recursion(x, y - 1)
        }

        return
    }


    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[0].length; k++) {

            if (grid[i][k] === 1) {
                counter++;
                grid[i][k] = 2
                recursion(i, k)
            }
            if (counter > maxArea) {
                maxArea = counter
            }
            counter = 0
        }


    }

    return maxArea
};

// console.log(maxAreaOfIsland([[0, 1, 1], [0, 1, 0], [1, 1, 1]]));
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));







[[0]]
[[0, 0, 0]]
[[0, 1, 0]]
[[1], [0]]
[[0], [1]]
[[1]]
[[1, 1, 1], [1, 1, 1]]
[[1, 1, 1]]





