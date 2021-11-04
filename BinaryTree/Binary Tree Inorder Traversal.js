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


var inorderTraversal = function (root) {

    if (!root) return []

    const stack = []

    const arr = []

    let node = root

    while (stack.length > 0 || node !== null) {


        // let node = stack[stack.length - 1]

        if (node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            arr.push(node.val)
            node = node.right
        }



    }

    return arr


};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

console.log(inorderTraversal(root));
