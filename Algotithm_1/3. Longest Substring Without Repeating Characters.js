/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let sub = ''
    let tempS = s[0] || ""
    for (let i = 0; i < s.length; i++) {
        if (tempS.includes(s[i])) {
            if (tempS.length > sub.length) {
                sub = tempS
            }
            i = i - tempS.length + 1
            tempS = ''
        }
        tempS = tempS + s[i]

    }
    if (tempS.length > sub.length) {
        sub = tempS
    }
    return sub.length
};

console.log(lengthOfLongestSubstring(""));