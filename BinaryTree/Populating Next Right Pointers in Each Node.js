/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

    if (!root) return null

    let nodeArray = []
    let tempArray = []
    let prevArray = nodeArray

    nodeArray.push(root)
    let isEnd = false
    while (!isEnd) {
        prevArray.forEach((node) => {
            if (node.left && node.right) {
                tempArray.push(node.left)
                tempArray.push(node.right)
            } else {
                isEnd = true
            }
        })
        prevArray = tempArray
        nodeArray = [...nodeArray, ...tempArray]
        tempArray = []

    }

    let treeLvl = 0
    let powerOf2 = 2;
    for (let i = 0; i < nodeArray.length; i++) {

        if (i + 2 === powerOf2) {
            treeLvl++
            powerOf2 = powerOf2 * 2
            nodeArray[i].next = null
        } else {
            nodeArray[i].next = nodeArray[i + 1]
        }

    }

    return nodeArray[0]


};