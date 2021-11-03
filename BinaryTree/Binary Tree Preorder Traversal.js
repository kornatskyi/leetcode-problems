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
var preorderTraversal = function (root) {


    const stack = []
    const arr = []

    stack.push(root)

    while (stack) {

        let node = stack[stack.length - 1]
        arr.push(node.val)
        stack.pop()

        if (node.right) {
            stack.push(node.right)
        }


        if (node.left) {
            stack.push(node.left)
        }


    }

    return arr

};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

console.log(preorderTraversal(root));



