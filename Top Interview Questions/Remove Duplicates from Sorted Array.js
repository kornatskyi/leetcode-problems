/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let temp = null
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        temp = nums[i + 1]
        if (temp === nums[i]) {
            k++
            nums[i] = null
        }


    }

    temp = null
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === null) {

            for (let j = i; j < nums.length; j++) {
                if (nums[j] !== null) {
                    nums[i] = nums[j]
                    nums[j] = null
                    break;
                }
            }
        }
    }
    return nums.length - k

};


removeDuplicates([1, 1, 2])