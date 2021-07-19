/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let isParenthesisOpen = false;
    let isCurlyBracketsOpen = false;
    let isSquareBracketsOpen = false;

    for (const char of s) {
        if (((char === '(' && !isParenthesisOpen) || (char === ')' && isParenthesisOpen)) && !isCurlyBracketsOpen && !isSquareBracketsOpen) {
            isParenthesisOpen = !isParenthesisOpen

        } else
            if (((char === '{' && !isCurlyBracketsOpen) || (char === '}' && isCurlyBracketsOpen)) && !isParenthesisOpen && !isSquareBracketsOpen) {
                isCurlyBracketsOpen = !isCurlyBracketsOpen
            } else
                if (((char === '[' && !isSquareBracketsOpen) || (char === ']' && isSquareBracketsOpen)) && !isCurlyBracketsOpen && !isParenthesisOpen) {
                    isSquareBracketsOpen = !isSquareBracketsOpen
                } else {
                    console.log(char);
                  
                    return false;
                }
    }




    if (!isParenthesisOpen && !isCurlyBracketsOpen && !isSquareBracketsOpen) {
        return true
    }



};

console.log("()         ", isValid("()"));
console.log("()[]{}     ", isValid("()[]{}"));
console.log("(]         ", isValid("(]"));
console.log("([)]       ", isValid("([)]"));
console.log("{[]}       ", isValid("{[]}"));
console.log("(((       ", isValid("((()))"));




