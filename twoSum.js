/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const arr = [3, 9, 2, 5, 7, 4, 6,]
const target = 6

var twoSum = function (nums, target) {

    let i = 0;

    let twoNums = []
    function recursion(index) {
        for (let j = 0; j < nums.length; j++) {

            const num1 = nums[index]
            const num2 = nums[index + j + 1]
            if ((num1 + num2) === target) {
                twoNums = [index, index + j + 1]
                return;
            }
        }
        index++;
        recursion(index);

    }

    recursion(i)
    return twoNums

};

console.log(twoSum(arr, target));