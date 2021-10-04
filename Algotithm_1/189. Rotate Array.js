/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {


    k = k % nums.length
    const newNums = new Array(nums.length)
    let j = 0
    for (let i = Math.abs(k - nums.length); i < nums.length; i++) {

        newNums[j] = nums[i]
        j++
    }
    for (let i = 0; i < Math.abs(k - nums.length); i++) {

        newNums[j] = nums[i]
        j++
    }

    newNums.forEach((e, i) => nums[i] = e)
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



test([99, -1, -100, 3,], rotate, [-1, -100, 3, 99], 1)
test([-1, -100], rotate, [-1, -100], 2)
test([4, 1, 2, 3], rotate, [1, 2, 3, 4], 5)
test([1], rotate, [1], 5)
test([5, 6, 7, 1, 2, 3, 4], rotate, [1, 2, 3, 4, 5, 6, 7], 3)
test([3, 99, -1, -100], rotate, [-1, -100, 3, 99], 2)