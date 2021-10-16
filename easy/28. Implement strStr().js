/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0

    let tstr = ''
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[tstr.length]) {

            tstr = tstr + haystack[i]
            if (tstr === needle) {
                return i - tstr.length + 1
            }

        } else {
            i = i - tstr.length
            tstr = ""
        }
    }
    return -1

};

