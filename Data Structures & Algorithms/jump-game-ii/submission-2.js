class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let jumps = 0;
        let maxArea = 0;
        let maxJump = 0;
        for(let i = 0; i < nums.length - 1; i++) {
            maxJump = Math.max(maxJump, i + nums[i]);
            
            if(i === maxArea) {
                maxArea = maxJump;
                jumps++;
            }
        }

        return jumps;
    }
}
