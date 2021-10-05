/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {


    let l = '', r = ''
    if (s[0] === " ") l = ' '
    if (s[s.length - 1] === " ") r = ' '

    s = s.split(" ")
    s = s.map(str => reverseString(str));
    s = s.join(' ')
    s = l + s + r
    console.log(s);
    return s

};

function reverseString(s) {
    s = s.split('')
    let i = 0
    let j = s.length - 1
    let temp = ''
    while (i < j) {

        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
    return s.join('')
};



let str = "hello"
console.log(reverseString(str));

function test(result, func, ...args) {


    if (result === func(...args)) {
        console.log("Pass!");
        return
    }
    console.log("Failed!");
    return
}


test("s'teL ekat edoCteeL tsetnoc", reverseWords, "Let's take LeetCode contest")
test("doG gniD", reverseWords, "God Ding")