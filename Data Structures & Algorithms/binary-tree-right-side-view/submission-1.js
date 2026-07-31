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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let q = [root];
        let output = [];
        var traversal = () => {
            while(q.length) {
                let qSize = q.length;
                for(let i = 0; i < qSize; i++) {
                    let curr = q.shift();
                    if(i === 0){ 
                        output.push(curr.val);
                    };
                    curr && curr.right && q.push(curr.right);
                    curr && curr.left && q.push(curr.left);
                }
                
            }
        }
        traversal();
        return output;
    }
}
