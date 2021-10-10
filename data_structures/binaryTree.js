

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @return { TreeNode }
 * */
function arrayToTree(array) {

    const root = new TreeNode(array[0])
    let arrWithNodes = [root]
    let tempArr = []
    let j = 1

    while (j < array.length) {

        arrWithNodes.forEach((e) => {
            e.left = array[j] ? new TreeNode(array[j]) : null
            if (e.left) {
                tempArr.push(e.left)
            }
            e.right = array[j + 1] ? new TreeNode(array[j + 1]) : null
            if (e.right) {
                tempArr.push(e.right)
            }
            j = j + 2;

        })

        arrWithNodes = tempArr;
        tempArr = []
        elementsCounter = 0

    }
    return root
}


console.log(arrayToTree([1, 3, 2, 5]));
console.log(arrayToTree([2, 1, 3, null, 4, null, 7]));
console.log(arrayToTree([3, 4, 5, 5, 4, null, 7]));