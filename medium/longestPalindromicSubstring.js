/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    var isPalindrome = function (xarr) {
        let i
        let j
        if ((xarr.length % 2) === 1) {
            i = xarr.length / 2 - 0.5;
            j = xarr.length / 2 - 0.5;
        } else {
            i = (xarr.length / 2);
            j = (xarr.length / 2) - 1;
        }
        while (j >= 0) {

            if (xarr[i] !== xarr[j]) {
                return false
            }
            i++;
            j--;

        }
        return true
    };


    let longestPalindrome = ""

    for (let i = 0; i < s.length; i++) {
        for (let j = s.length; j > i; j--) {
            if (isPalindrome(s.substring(i, j)) && s.substring(i, j).length > longestPalindrome.length) {
                longestPalindrome = s.substring(i, j);
            }
        }
    }


    return longestPalindrome;

};



function test(func, input, output) {

    if (func(input) === output) {
        console.log("For ", input, " PASSED!!!");
    } else {
        console.log("For ", input, " FAILED!!!");
    }

}


test(longestPalindrome, "forgeeksskeegfor", "geeksskeeg")
test(longestPalindrome, "Geeks", "ee")
test(longestPalindrome, "babad", "bab")
test(longestPalindrome, "cbbd", "bb")
test(longestPalindrome, "ac", "a")
test(longestPalindrome, "a", "a")






