/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let lastWord = ""
    let tempWord = ""

    for (let i = 0; i < s.length; i++) {

        if (s[i] !== " ") {

            tempWord = tempWord + s[i]

        } else {

            tempWord = ""
        }
        if (tempWord !== "") {

            lastWord = tempWord
        }


    }
    return lastWord.length

};

lengthOfLastWord("Hello World")
lengthOfLastWord("   fly me   to   the moon  ")