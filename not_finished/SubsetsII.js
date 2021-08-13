/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    const numbersMapping = {
        '-10': 1238,
        '-9': 2345,
        '-8': 3456,
        '-7': 6678,
        '-6': 4564,
        '-5': 6787,
        '-4': 2344,
        '-3': 7565,
        '-2': 4567,
        '-1': 4345,
        '0': 4577,
        '1': 4563,
        '2': 7576,
        '3': 2343,
        '4': 1311,
        '5': 8663,
        '6': 9969,
        '7': 8588,
        '8': 7377,
        '9': 6676,
        '10': 4443,

    }

    const resultArray = []

    function recursion(arr) {
        resultArray.push([...arr])
        if (arr.length < 1) {
            return
        }
        arr.shift()
        recursion(arr)
    }

    recursion(nums)


    return resultArray
};


const nums = [1, 2, 2];
console.log(subsetsWithDup(nums));

