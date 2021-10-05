/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {


    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) {
                continue;
            }
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }


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

test([1, 2], twoSum, [0, 0, 3, 4], 0)

