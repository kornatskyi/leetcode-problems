function findADuplicateValue(str) {


    const map = {}

    for (let index = 0; index < str.length; index++) {
        const c = str[index];
        if (map[c]) {
            return c
        } else {
            map[c] = c
        }
    }
    return null



}
// O(n) - time
// O(n) - space


function minusplu(str) {

    let m = 'minus'
    let p = 'plus'
    let newStr = ""

    while (str) {
        if (str.slice(0, m.length) === m) {
            str = str.slice(m.length)

            newStr = newStr + '-'
        } else {
            str = str.slice(p.length)
            newStr = newStr + '+'

        }
    }

    return newStr
}



