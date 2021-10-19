/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {

    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            k++;
            nums[i] = null;
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === null) {
            for (let j = i; j < nums.length; j++) {
                nums[j] = nums[j + 1]
            }



        }

    }


    return nums.length - k

};


removeElement([3, 2, 2, 3], 3)