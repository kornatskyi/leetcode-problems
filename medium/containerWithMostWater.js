/**
 * @param {number[]} height
 * @return {number}
 */


//Time complexity O(n)
var maxAreaN = function (height) {

    let mostWater = 0;
    let i = 0;
    let j = height.length - 1;
    while (true) {

        if ((Math.min(height[i], height[j]) * Math.abs(i - j)) > mostWater) {
            mostWater = (Math.min(height[i], height[j]) * Math.abs(i - j));
        }

        if (height[i] < height[j]) {
            i++;

        } else {
            j--;
        }
        if (i === j) {
            return mostWater
        }
    }

};



// Time complexity O(n^2)

maxAreaN2([1, 5, 4, 3])

var maxArea = function (height) {

    let mostWater = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            if ((Math.min(height[i], height[j]) * Math.abs(i - j)) > mostWater) {
                mostWater = (Math.min(height[i], height[j]) * Math.abs(i - j));
            }
        }
    }

    return mostWater
};




//tests
test(maxAreaN, [1, 5, 4, 3], 6);
test(maxAreaN, [3, 1, 2, 4, 5], 12);
test(maxAreaN, [1, 1], 1);
test(maxAreaN, [4, 3, 2, 1, 4], 16);
test(maxAreaN, [1, 2, 1], 2);
test(maxAreaN, [1, 2], 1);


function test(func, input, output) {

    if (func(input) === output) {
        console.log("For " + input + " PASSED!!!");
    } else {

        console.log("For " + input + " FAILED!!!");
    }

}

