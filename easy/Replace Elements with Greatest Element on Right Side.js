/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {


    for (let i = arr.length - 1; i > 0; i--) {

        if (arr[i] > arr[i - 1]) {

            arr[i - 1] = arr[i]

        }


    }
    arr.shift()
    arr.push(-1)

    return arr
};