/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    for (let i = 0; i <= s2.length - s1.length; i++) {

        let j = 0
        let sliced2 = s2.slice(i, i + s1.length);
        let s11 = [...s1]

        while (j < s1.length) {
            if (!s11.includes(s2[j + i])) {
                break
            }
            if (!sliced2.includes(s11[j])) {
                break

            }
            s11[s11.indexOf(s2[j + i])] = ''

            j++
            if (j === s1.length) {
                return true;
            }

        }


        // let s11 = [...s1]
        // if (s2.slice(i, i + s1.length).split('').every(char => {

        //     const b = s11.includes(char)
        //     s11[s11.indexOf(char)] = ''
        //     return b

        // })) {

        //     return true
        // }
    }
    return false

};




console.log(checkInclusion("hello", "ooolleoooleh"));
console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("hello", "olleh"));
console.log(checkInclusion("hello", "sdfsfhellofsd"));
console.log(checkInclusion("d", "fdsggdfs"));
console.log(checkInclusion("hello", "ooolleoooleh"));



"ab"
"eidbaooo"
"hello"
"olleh"
"hello"
"sdfsfhellofsd"
"d"
"fdsggdfs"
"hello"
"ooolleoooleh"