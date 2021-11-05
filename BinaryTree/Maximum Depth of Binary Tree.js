function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
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
 * @return {number}
 */
var maxDepth = function (root) {

    if (!root) return 0
    let max = 1
    let cur = 1

    function recursion(node) {
        // Check if current depth more then max depth
        max = cur > max ? cur : max
        // Increment on each step in depth
        cur++;
        if (node.left) {
            recursion(node.left)
        }

        if (node.right) {
            recursion(node.right)
        }
        // Decrement on ech function finish
        cur--;

    }
    recursion(root)

    return max

};

const root = new TreeNode()

console.log(maxDepth(root));
