// let half = Math.ceil(nums.length / 2);
// let prevPoint = half;
// while (index = -1) {

//     console.log(nums[prevPoint]);
//     // console.log(prevPoint);

//     if (target === nums[prevPoint]) {
//         index = prevPoint

//         break
//     }
//     if (target > nums[prevPoint]) {
//         prevPoint = prevPoint + Math.ceil(half / 2)

//     } else {
//         prevPoint = prevPoint - Math.ceil(half / 2);

//     }

//     if (half < 2) {
//         break
//     }
//     half = Math.ceil(half / 2)
// }


[1, 4, 5, 6, 9]

8

-1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {


    



    // let index = -1;


    // let point = Math.floor(nums.length / 2);
    // while (index = -1) {
    //     if (target === nums[0]) {
    //         return 0
    //     }
    //     if (target === nums[nums.length - 1]) {
    //         return nums.length - 1
    //     }



    //     console.log(nums[point]);
    //     // console.log(prevPoint);


    //     if (target > nums[point]) {
    //         point = point + Math.floor(point / 2);
    //     } else {
    //         point = point - Math.floor(point / 2);
    //     }
    //     if (target === nums[point]) {
    //         index = point
    //         break
    //     }
    //     if (point < 2) {

    //         break

    //     }
    // }


    return nums.indexOf(target);
};


function test(result, func, ...args) {

    if (result === func(...args)) {
        return "Pass!"
    }
    return "Failed!"
}

console.log(test(5, search, [-1, 0, 3, 5, 9, 12], 12));
console.log(test(-1, search, [-1, 0, 3, 5, 9, 12], 13));
console.log(test(-1, search, [-1, 0, 3, 5, 9, 12], 2));
console.log(test(0, search, [-1, 0, 3, 5, 9, 12], -1));
console.log(test(1, search, [-1, 0, 3, 5, 9, 12], 0));
console.log(test(-1, search, [-1, 0, 3, 5, 9, 12], 2));
console.log(test(6, search, [0, 1, 3, 5, 9, 12, 20], 20));
console.log(test(0, search, [5], 5));
console.log(test(-1, search, [5], 1));
console.log(test(0, search, [2, 5], 2));
console.log(test(1, search, [2, 5], 5));
console.log(test(1, search, [2, 5], 5));
console.log(test(1, search, [2, 3, 5], 3));
console.log(test(-1, search, [2, 3, 5], 4));
console.log(test(1, search, [2, 3], 3));
console.log(test(2, search, [-1, 2, 5], 5));



// console.log(test(-1, search, [-1, 0, 3, 5, 9, 12], 2));

