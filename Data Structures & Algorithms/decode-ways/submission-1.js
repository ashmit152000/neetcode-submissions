class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = new Array(s.length).fill(-1);
        const traversal = function (i) {
             if(i === s.length) return 1;
             if(s[i] === '0') return 0;
            if(dp[i] !== - 1) return dp[i];

            dp[i] = traversal(i + 1);

            if(i + 1 < s.length) {
            let twoDigit = s.substring(i, i + 2);
            if (twoDigit >= "10" && twoDigit <= "26") {
                dp[i] += traversal(i + 2);
            }

            }

            // for(let i = 1; i <= 2; i++) {
            //     let curr = remaining.substring(0, i);
            //     if(Number(curr) >= 1 && Number(curr) <= 26 && !curr.startsWith("0")) {
            //         // const letter = String.fromCharCode(parseInt(curr) + 64);
            //         traversal(remaining.substring(i));
            //     } else {
            //         continue;
            //     }
            // }

            return dp[i];
        }
        return traversal(0);
    }
    
}
