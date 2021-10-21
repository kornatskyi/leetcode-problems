/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {

    let firstMaxNum
    let secondMaxNum
    let thirdMaxNum

    nums.forEach(e => {
        if (e > firstMaxNum || !firstMaxNum) {
            thirdMaxNum = secondMaxNum
            secondMaxNum = firstMaxNum
            firstMaxNum = e
        }
        if ((!secondMaxNum || e > secondMaxNum) && e < firstMaxNum) {
            thirdMaxNum = secondMaxNum
            secondMaxNum = e
        }

        if ((!thirdMaxNum || e > thirdMaxNum) && e < secondMaxNum) {
            thirdMaxNum = e
        }
    })
    console.log(secondMaxNum);
    return ((thirdMaxNum || thirdMaxNum === 0) ? thirdMaxNum : firstMaxNum)

};


