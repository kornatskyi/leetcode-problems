
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    const copyArray = [...nums]

    for (let i = 0; i < nums.length; i++) {
        copyArray[nums[i] - 1] = null
    }

    const resultArray = []
    for (let i = 0; i < copyArray.length; i++) {

        if (copyArray[i] !== null) {
            resultArray.push(i + 1)
        }
    }
    console.log(resultArray);
    return resultArray


};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])



/**
 * 
    nums = [4,3,2,7,8,2,3,1]
    n = nums.length

    newArray = new Array(n)

    for(i = 1, i <= n , i++) {

        newArray[i - 1] = i
    for(i = 0, i < nums.length, i++) {


    for(i = 0, i < nums.length, i++) {

        for(j < )

    }


    
    array = []



 */