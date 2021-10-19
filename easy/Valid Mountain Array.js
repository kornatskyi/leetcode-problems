/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {

    let up = true;

    if (((arr[0] - arr[1]) > 0)) {
        return false
    }
    if (arr.length < 3) return false

    for (let i = 0; i < arr.length - 1; i++) {




        if (((arr[i] - arr[i + 1]) < 0) && up) {
            continue;
        }

        if (((arr[i] - arr[i + 1]) > 0) && up) {
            up = false
            continue
        }
        if (((arr[i] - arr[i + 1]) < 0) && !up) {
            return false
        }
        if ((arr[i] - arr[i + 1]) === 0) return false




    }
    if (up) return false
    return true

};