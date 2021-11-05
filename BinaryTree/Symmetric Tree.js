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
 * @return {boolean}
 */
var isSymmetric = function (root) {

    if (!root.left && !root.right) return true


    let lp = root.left
    let rp = root.right
    let larr = []
    let rarr = []

    function lrecursion(node) {

        if (!node) {
            return
        }

        larr.push(node)

        if (node.left) {
            lrecursion(node.left)
        } else {
            larr.push(null)
        }

        if (node.right) {
            lrecursion(node.right)
        } else {
            larr.push(null)
        }
    }
    function rrecursion(node) {

        if (!node) {
            return
        }

        rarr.push(node)


        if (node.right) {
            rrecursion(node.right)
        } else {
            rarr.push(null)
        }

        if (node.left) {

            rrecursion(node.left)
        } else {
            rarr.push(null)
        }

    }
    lrecursion(lp)
    rrecursion(rp)

    for (let i = 0; i < Math.max(larr.length, rarr.length); i++) {

        if (larr[i]?.val !== rarr[i]?.val) {
            return false
        }


    }

    return true

};

const root = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3)))

console.log(isSymmetric(root));