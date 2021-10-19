/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {

    let r = 0
    let l = nums.length - 1
    let temp = 0

    while ((r < nums.length || l >= 0) && r <= l) {
        console.log("hello");
        if (nums[r] % 2 === 1) {
            if (nums[l] % 2 === 0) {
                temp = nums[r]
                nums[r] = nums[l]
                nums[l] = temp
                r++
                l--
            } else {
                l--
            }
        } else {
            r++
        }

    }
    return nums
};
