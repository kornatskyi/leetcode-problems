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
 * @return {number[]}
 */


var postorderTraversal = function (root) {

    if (!root) return []

    const stack = [root]

    const arr = []



    const out = []

    while (stack.length > 0) {


        let node = stack.pop()
        out.push(node.val)

        if (node.left !== null) {
            stack.push(node.left);
        }

        if (node.right !== null) {
            stack.push(node.right);
        }


    }
    while (out.length > 0) {
        arr.push(out.pop())
    }

    return arr



};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

console.log(postorderTraversal(root));
