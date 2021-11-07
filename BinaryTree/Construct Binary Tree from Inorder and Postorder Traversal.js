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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {

    function recursion(ia, pa) {


        let rootI = ia.indexOf(pa[pa.length - 1])

        let root = rootI === -1 ? null : new TreeNode(ia[rootI])


        if (ia.slice(0, rootI).length > 0) {

            root.left = recursion(ia.slice(0, rootI), pa.slice(0, rootI))
        }
        if (ia.slice(rootI + 1, ia.length).length > 0) {

            root.right = recursion(ia.slice(rootI + 1, ia.length), pa.slice(rootI, pa.length - 1))
        }

        return root
    }

    return recursion(inorder, postorder)

};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));

        // console.log(rootI);
        // console.log(ia.slice(0, rootI));
        // console.log(ia.slice(rootI + 1, ia.length));
        // console.log(pa.slice(rootI, pa.length - 1));
        // console.log(ia.slice(0, rootI));
        // console.log(pa.slice(0, rootI));