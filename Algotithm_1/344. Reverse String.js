/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {


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
    return s

};


/**Recursive solution */
// let i = 0;
// function recursion() {
//     let char = s[i]
//     i++;
//     if (i < s.length) recursion()

//     s[s.length - i] = char;
//     i--;
// }
// recursion()
// return s


function test(result, func, ...args) {

    const fR = func(...args);

    if (result.every((e, i) => e === fR[i])) {
        console.log("Pass!");
        return
    }
    console.log("Failed!");
    return
}

test(["o", "l", "l", "e", "h"], reverseString, ["h", "e", "l", "l", "o"])

test(["h", "a", "n", "n", "a", "H"], reverseString, ["H", "a", "n", "n", "a", "h"])

test(["o", "0"], reverseString, ["0", "o"])
