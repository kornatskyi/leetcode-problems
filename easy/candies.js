/**
     * @param {number[]} candyType
     * @return {number}
     */

const candyTypes = [1, 1, 2, 3];


var distributeCandies = function (candyType) {

    const maxNumberOfCandies = candyType.length / 2;
    let counter = 0;
    const uniqueTypesKeeper = [];

    candyType.forEach(candyType => {
        if (!uniqueTypesKeeper.includes(candyType)) {
            uniqueTypesKeeper.push(candyType)
        }
    })
    if (uniqueTypesKeeper.length > maxNumberOfCandies) {
        return maxNumberOfCandies
    } else {
        return uniqueTypesKeeper.length
    }


};

console.log(distributeCandies(candyTypes));