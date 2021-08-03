/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */


var removeElement = function (nums, val) {



    function recursion() {
        let removedNotAll = false;


        for (let i = 0; i < nums.length; i++) {


            if (nums[i] === val) {
                nums[i] = nums[i + 1];

                if (i < nums.length - 1) {
                    nums[i + 1] = val

                }
                removedNotAll = true

            }

        }


        if (removedNotAll) {


            recursion()

        }





    }
    recursion()

    let j = 0
    while (nums[j] !== undefined) {
        j++
    }
    return j


};


console.log(removeElement([0, 2, 2, 2, 2, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement(
    [3, 2, 2, 3], 3));
console.log(removeElement(
    [4, 5], 4));