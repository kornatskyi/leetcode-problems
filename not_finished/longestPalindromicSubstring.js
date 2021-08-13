// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {

//     var isPalindrome = function (xarr) {
//         let i
//         let j
//         if((xarr.length % 2) === 1) {
//              i = xarr.length / 2 - 0.5;
//              j = xarr.length / 2 - 0.5;
//         } else {
//             i = (xarr.length / 2);
//             j = (xarr.length / 2) - 1;
//         }
//         while (j >= 0) {

//             console.log("ss");
//             if (xarr[i] !== xarr[j]) {
//                 return false
//             }
//             i++;
//             j--;
        
//         }
//         return true
//     };






//     let longestPS = ""
//     let subString = ""
//     let iteratorStartingPoint = 0
//     let palindromsArray = []
    

//     for (let i = 0; i < s.length; i++) {
//         let j = i;
//         let l = i;
//         subString = ""
//         console.log(" for " + s[i]);
//         while (s[j] && s[l]) {

//             subString = s[l] + subString + s[j]

//             if(isPalindrome(subString)) {
//                 if(subString.length > longestPS.length) {
//                     longestPS = subString
//                 }
//                 palindromsArray.push(subString)
//             }

//             console.log(j);
//             console.log(l);
//             console.log("🚀 ~ s[j] + s[l]", s[j] + s[l])
//             j++;
//             l--;



//         }
//         console.log("🚀 ~ subString", subString)
//         console.log("🚀 ~ palindromsArray", palindromsArray)

//     }

//     console.log("🚀 ~ longestPS", longestPS)




//     return longestPS




// };





// const s1 = "abcabacb"
// const s2 = "dvdddfverwdsdfsd"
// const s3 = "dvdf"
// // console.log(longestPalindrome(s1));
// // console.log(longestPalindrome(s2));
// console.log(longestPalindrome(s3));






