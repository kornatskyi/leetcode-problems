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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    /*
    The main idea is that in preoder array firs element always going to be a root value of a tree.
    So by knowing root value we can determine the index of a root value in the inorder array.
    In the inorder array we know that all root's children will be on placed on the left and the right of element
    And in preorder array all left children going to be in first part of array (after root value) and right children
    will follow after left part. We can determine the length of this subarrays by checking the lengths of subarrays in
    the inorder array, in  which we know for sure because they separated with the root value.
    
    */

    function recursion(pa, ia) {
        // Getting index of root element in the inorder array
        let rootI = ia.indexOf(pa[0])
        // Creating root node
        let root = rootI === -1 ? null : new TreeNode(ia[rootI])
        // Checking if root node has any more child nodes on the left
        if (ia.slice(0, rootI).length > 0) {

            root.left = recursion(pa.slice(1, rootI + 1), ia.slice(0, rootI))
        }
        // Check if there are nodes on the right
        if (ia.slice(rootI + 1, ia.length).length > 0) {

            root.right = recursion(pa.slice(rootI + 1, pa.length), ia.slice(rootI + 1, ia.length))
        }

        return root
    }

    return recursion(preorder, inorder)

};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
