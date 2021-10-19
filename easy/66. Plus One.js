/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    let one = 1
    let i = digits.length - 1
    while (one > 0) {

        if ((digits[i] + one) === 10) {
            digits[i] = 0;
            if (i === 0) {
                digits.unshift(1)
                return digits;
            }
            i--;
        } else {
            digits[i] = digits[i] + 1;
            one = 0
        }


    }
    return digits
};

