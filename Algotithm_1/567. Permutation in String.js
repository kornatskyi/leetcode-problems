/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const s1Map = {};
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1;
    }
    function sum(s1Map) {
        let count = 0
        for (const key in s1Map) {
            count = count + s1Map[key]
        }
        return count
    }
    let s1MapCopy = { ...s1Map }
    for (let i = 0; i < s2.length; i++) {
        if (s1MapCopy[s2[i]]) {
            s1MapCopy[s2[i]]--;
            if (sum(s1MapCopy) <= 0) return true
        } else {
            i = i - (s1.length - sum(s1MapCopy))
            s1MapCopy = { ...s1Map }
        }
    }
    return false

};






console.log(checkInclusion("hello", "ooolleoooleh"));
console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("hello", "olleh"));
console.log(checkInclusion("hello", "sdfsfhellofsd"));
console.log(checkInclusion("d", "fdsggdfs"));
console.log(checkInclusion("hello", "ooolleoooleh"));
console.log(checkInclusion("adc", "dcda"));



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
"adc"
"dcda"
