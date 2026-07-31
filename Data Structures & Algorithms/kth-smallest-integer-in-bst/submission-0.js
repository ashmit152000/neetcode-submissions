/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = k;
        let ans = null;
        var traversal = (rootNode) => {
            if(ans) return ans;
            rootNode && rootNode.left && traversal(rootNode.left);
            count--;
            if(count === 0) {
                ans = rootNode.val;
            }
            rootNode && rootNode.right && traversal(rootNode.right);
        }

        traversal(root);
        return ans;
    }
}
