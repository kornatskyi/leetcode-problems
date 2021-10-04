/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let value = Math.floor(n / 2)
        let i = 1
        if (n === 1) {
            return 1
        }

        if (!isBadVersion(n)) {
            return n
        }
        while (true) {

            const isBad = isBadVersion(value)
            if (!isBadVersion(value - 1) && isBad) {
                return value;
            } else if (!isBad) {
                value = value + (Math.ceil(n / (2 ** i)))

            } else if (isBad) {
                value = value - (Math.ceil(n / (2 ** i)))

            }
            i++;

        }

    };
};

function isBadVersion(v) {
    const bad = 1150769282;

    return v >= bad ? true : false;
}



function test(result, func, ...args) {

    if (result === func(...args)) {
        return "Pass!"
    }
    return "Failed!"
}


console.log(test(1150769282, solution(isBadVersion), 1420736637));