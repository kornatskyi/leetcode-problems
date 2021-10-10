/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {

    if (root1 === null && root2 === null) return null
    const root = new TreeNode()
    const sumNode = root

    function recursion(node1, node2, sumNode) {

        if (node1 && node2) {

            sumNode.val = node1.val + node2.val

            if (node1.left || node2.left) {
                sumNode.left = new TreeNode()
                recursion(node1.left, node2.left, sumNode.left)
            }
            if (node1.right || node2.right) {
                sumNode.right = new TreeNode()
                recursion(node1.right, node2.right, sumNode.right)
            }

        } else if (node1 && !node2) {

            sumNode.val = node1.val

            if (node1.left) {
                sumNode.left = new TreeNode()
                recursion(node1.left, null, sumNode.left)
            }
            if (node1.right) {
                sumNode.right = new TreeNode()
                recursion(node1.right, null, sumNode.right)
            }

        } else if (!node1 && node2) {

            sumNode.val = node2.val

            if (node2.left) {
                sumNode.left = new TreeNode()
                recursion(null, node2.left, sumNode.left)
            }
            if (node2.right) {
                sumNode.right = new TreeNode()
                recursion(null, node2.right, sumNode.right)
            }

        } else {
            return
        }


    }
    recursion(root1, root2, sumNode)

    return root


};