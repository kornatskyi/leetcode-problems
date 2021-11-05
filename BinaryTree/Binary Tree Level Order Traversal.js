/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (!root) return []
    const arr = [[root.val]]
    let prevs = [root]

    while (prevs.length > 0) {

        let temp = []
        let tempVals = []

        for (let i = 0; i < prevs.length; i++) {

            if (prevs[i].left) {
                temp.push(prevs[i].left)
                tempVals.push(prevs[i].left.val)

            }

            if (prevs[i].right) {
                temp.push(prevs[i].right)
                tempVals.push(prevs[i].right.val)

            }

        }
        prevs = temp
        if (tempVals.length > 0) {
            arr.push(tempVals)

        }


    }


    return arr

};