/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    const result = new Array(nums.length)

    nums = nums.map(e => e * e)

    let l = 0
    let r = nums.length - 1
    let i = nums.length - 1

    while (i >= 0) {

        if (nums[l] >= nums[r]) {
            result[i] = nums[l]
            l++;
        } else {
            result[i] = nums[r]
            r--
        }
        i--
    }


    return result;


};


function test(result, func, ...args) {

    const fR = func(...args);

    if (result.every((e, i) => e === fR[i])) {
        console.log("Pass!");
        return
    }
    console.log("Failed!");
    return
}


test([0, 0, 25, 49, 99980001, 100000000, 100000000], sortedSquares, [-10000, -9999, -7, -5, 0, 0, 10000])

test([0, 25, 36, 49, 49], sortedSquares, [-7, -6, -5, 0, 7])


test([0, 1, 9, 16, 100], sortedSquares, [-4, -1, 0, 3, 10])
test([4, 9, 9, 49, 121], sortedSquares, [-7, -3, 2, 3, 11])
test([0], sortedSquares, [0])
test([4, 9, 9, 49, 121], sortedSquares, [-7, -3, 2, 3, 11])
test([0], sortedSquares, [0])
test([100], sortedSquares, [10])
test([0, 1, 9, 16], sortedSquares, [-1, 0, 3, 4])

test([1, 4], sortedSquares, [-2, -1])
test([1], sortedSquares, [-1])
test([0, 1], sortedSquares, [-1, 0])
test([1, 4, 9, 25], sortedSquares, [-5, -3, -2, -1])
test([1, 4], sortedSquares, [-1, 2])
test([1, 4, 9, 16], sortedSquares, [-1, 2, 3, 4])


