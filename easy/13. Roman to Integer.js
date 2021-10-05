/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    function rToI(char) {

        switch (char) {
            case 'I': return 1

            case 'V': return 5

            case 'X': return 10

            case 'L': return 50

            case 'C': return 100

            case 'D': return 500


            case 'M': return 1000
            default:
                break;
        }

    }

    function getGrade(char) {

        switch (char) {
            case 'I': return 0

            case 'V': return 1

            case 'X': return 2

            case 'L': return 3

            case 'C': return 4

            case 'D': return 5


            case 'M': return 6
            default:
                break;
        }

    }
    let currentGrade = 0;
    let sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (getGrade(s[i]) >= currentGrade) {
            sum = sum + rToI(s[i])
        } else {
            sum = sum - rToI(s[i])
        }
        currentGrade = getGrade(s[i])
    }

    return sum
};

console.log(romanToInt("MCMXCIV"));

