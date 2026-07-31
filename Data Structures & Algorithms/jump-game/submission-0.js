class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let farthest = -Infinity;
        for(let i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, nums[i] + i);
            if(i >= farthest) return false;
        }

        return true;
    }
}
