function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    if (!root) return false

    let cur

    let has = false

    function recursion(node) {
        cur = cur ? cur + node.val : node.val;

        if (!node.left && !node.right) {
            if (cur === targetSum) {
                has = true
                return true
            }
        }

        if (node.left) {
            recursion(node.left)
        }

        if (node.right) {
            recursion(node.right)
        }
        cur = cur - node.val;

    }
    recursion(root)

    return has

};

const root = new TreeNode(1, new TreeNode(2))
// const root = new TreeNode(5,
//     new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
//     new TreeNode(8, new TreeNode(13, null, null), new TreeNode(4, null, new TreeNode(1))))

console.log(hasPathSum(root, 2));