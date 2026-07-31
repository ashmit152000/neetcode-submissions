class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxCount = 0;
        let dataSet = new Set();
        for(let num of nums) {
            dataSet.add(num);
        }

        for(let num of nums) {
            let currCount = 0;
            
            let currNum = -1;
            if(!dataSet.has(num - 1)) {
                currCount++;
                currNum = num;
                while(dataSet.has(currNum + 1)) {
                    currCount++;
                    currNum += 1;
                }
                maxCount = Math.max(currCount, maxCount);
            }
        }

        return maxCount;
    }
}
