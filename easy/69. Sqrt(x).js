/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

    let i = 1
    let power = 0
    while (power <= x) {
        power = i * i
        i++
    }
    return i - 2
};


