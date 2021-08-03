/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = "";
    const str = x.toString()

    for (let i = str.length - 1; i >= 0; i--) {

        result = result + str[i]


    }

    if(x < 0) {
        result = -parseInt(result)
    }



    if ((result > Math.pow(2, 31) - 1) || (result < -(Math.pow(2, 31)))) {
        return 0

    } else {
        return result

    } 

};

const x = -2147483648;

console.log(reverse(x));