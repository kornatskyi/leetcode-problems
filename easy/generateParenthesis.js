/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    var result = [];
    var helper = function (left, right, str) {
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        }
        if (left > 0) {
            helper(left - 1, right, str + '(');
        }
        if (right > left) {
            helper(left, right - 1, str + ')');
        }
    };
    helper(n, n, '');
    return result;
};




