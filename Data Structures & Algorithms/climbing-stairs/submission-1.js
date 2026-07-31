class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    
    climbStairs(n) {
        let dp = new Array(n + 1).fill(-1);
        
        // if(target === 0) return 1;
        // if(target < 0) return 0;
        // if(dp[target] !== -1) return dp[target];
        // let left =  traversal(target - 1);
        // let right =  traversal(target - 2);
        // dp[target] = left + right;
        // return dp[target];

        dp[0] = 1;
        dp[1] = 1;
        for(let i = 2; i <= n;i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
      }
       
    

   
}
