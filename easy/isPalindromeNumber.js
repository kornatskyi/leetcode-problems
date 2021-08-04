/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    let i
    let j
    const xarr = Strint(x)
    if((xarr.length % 2) === 1) {
         i = xarr.length / 2 - 0.5;
         j = xarr.length / 2 - 0.5;
    } else {
        i = (xarr.length / 2);
        j = (xarr.length / 2) - 1;
    }
    while (j >= 0) {

        console.log("ss");
        if (xarr[i] !== xarr[j]) {
            return false
        }
        i++;
        j--;
    
    }
    return true
};

let [x, y, z, j, l, k] = [11233211, 122232241, 131, 9, -101, -122]
console.log(isPalindrome(x));
console.log(isPalindrome(y));
console.log(isPalindrome(z));
console.log(isPalindrome(j));
console.log(isPalindrome(l));
console.log(isPalindrome(k));

console.log();




//"isPalinfrome number faster then 47, less memory then 83"
// var isPalindrome = function(x) {

//     const xarr =(x+ "").split('');
//     let i = 0;
//     let j = 0;
//     while(i < (xarr.length % 2 === 1? (xarr.length / 2) + 1 : xarr.length / 2)) {
//         i++;
//         j++;
//         if(xarr[i] !== xarr[xarr.length - j - 1]) {
//             return false
//         }
//     }
//     return true
// };