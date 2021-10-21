/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {

    function sortInt(array) {
        let temp = 0
        for (let i = 0; i < array.length; i++) {
            for (let j = i; j < array.length; j++) {
                if (array[i] > array[j]) {
                    temp = array[i]
                    array[i] = array[j]
                    array[j] = temp

                }
            }
        }
        return array
    }

    let expected = [...heights]

    sortInt(expected)

    let counter = 0
    for (let i = 0; i < heights.length; i++) {

        if (heights[i] !== expected[i]) {
            counter++
        }
    }

    return counter

};

heightChecker([10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7])









/*

    temp = 0
    for(i = 0 , i < array.length, i++) {

        for(j = 0, j < array.length, j++)
        {
            if(array[i] > array[j]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
                
            }
        }
    }    

    return array

*/


/**


[1,3,2,3,4,5]





 */