/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let rs = ""
    let maxLength = 0
    let rememberIterator = 0
    for (let i = 0; i < s.length; i++) {

        if (rs.includes(s[i])) {

            if (rs.length > maxLength) {
                maxLength = rs.length
            }

            rs = ""
            i = rememberIterator
            continue

        }
        rs = rs + s[i]

        if (rs.length === 1) {
            rememberIterator = i;
        }


        if (i === s.length - 1) {
            if (rs.length > maxLength) {

                maxLength = rs.length

            }
        }


    }


    return maxLength



};



const s1 = "abcabcbb"
const s2 = "dvdddfverwdsdfsd"
const s3 = "dvdf"
console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));