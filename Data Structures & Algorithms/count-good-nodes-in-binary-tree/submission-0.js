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
     * @return {number}
     */
    goodNodes(root) {
        if(!root) return root;
        let count = 0;
        var traversal = (rootNode, maxTillNow) => {
            if(!rootNode) return;
            if(rootNode.val >= maxTillNow) {
                count++;
                maxTillNow = rootNode.val;
            }
            traversal(rootNode.left, maxTillNow);
            traversal(rootNode.right, maxTillNow);
        }
        traversal(root, root.val);
        return count;
    }
}
