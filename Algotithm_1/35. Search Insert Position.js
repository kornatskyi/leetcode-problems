/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let leftLimit = 0
    let rightLimit = nums.length
    let index = (Math.floor((rightLimit - leftLimit) / 2)) + leftLimit
    while (true) {


        if (nums[index] === target) {
            return index
        } else if (leftLimit >= rightLimit - 1) {
            if (nums[0] > target) {
                return 0;
            }
            return rightLimit
        } else if (target < nums[index]) {
            rightLimit = index
            index = (Math.floor((rightLimit - leftLimit) / 2)) + leftLimit
        } else if (target > nums[index]) {
            leftLimit = index



            index = (Math.floor((rightLimit - leftLimit) / 2)) + leftLimit
        }
    }
};


function test(result, func, ...args) {

    if (result === func(...args)) {
        return "Pass!"
    }
    return "Failed!"
}
console.log(test(0, searchInsert, [1, 3], 1));



console.log(test(1, searchInsert, [1, 3, 5, 6], 3));
console.log(test(5, searchInsert, [1, 3, 5, 6, 19, 23333, 3123123], 23333));
console.log(test(0, searchInsert, [1], 1));
console.log(test(3, searchInsert, [1, 3, 5, 10], 10));
console.log(test(2, searchInsert, [1, 3, 5, 6], 5));
console.log(test(1, searchInsert, [1, 3, 5, 6], 2));
console.log(test(4, searchInsert, [1, 3, 5, 6], 7));
console.log(test(0, searchInsert, [1, 3, 5, 6], 0));
console.log(test(0, searchInsert, [1], 0));