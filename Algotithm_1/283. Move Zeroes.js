/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {

    let i = 0;
    let j = 1;
    let zerosCounter = 0;
    function recursion() {
        let value = NaN;
        if (nums[i] !== 0) {
            value = nums[i]
        } else {
            zerosCounter++
        }
        i++;

        if (i < nums.length) {
            recursion()
        }
        if (!isNaN(value)) {
            nums[Math.abs(zerosCounter - nums.length) - j] = value
            j++;
        }


    }
    recursion()

    for (let i = Math.abs(zerosCounter - nums.length); i < nums.length; i++) {
        nums[i] = 0

    }

    return nums

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


test([1, 3, 12, 0, 0], moveZeroes, [0, 1, 0, 3, 12])
test([0], moveZeroes, [0])
test([1, 4, 5, 8, 0, 0], moveZeroes, [1, 4, 5, 0, 0, 8])
test([0, 0, 0], moveZeroes, [0, 0, 0])
test([1, 0, 0], moveZeroes, [0, 1, 0])
test([1, 0, 0], moveZeroes, [0, 0, 1])
test([1, 0, 0], moveZeroes, [1, 0, 0])
test([1999, 1, 0, 0, 0, 0], moveZeroes, [1999, 0, 0, 0, 0, 1])
test([1, 3, 2, 0, 0, 0, 0], moveZeroes, [0, 1, 0, 3, 0, 2, 0])









