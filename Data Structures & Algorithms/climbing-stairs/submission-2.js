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

       let prev2 = 1;
        let prev1 = 1;
        for(let i = 2; i <= n;i++) {
            let temp = prev2;
            prev2 += prev1;
            prev1 = temp;
        }

        return prev2;
      }
       
    

   
}
