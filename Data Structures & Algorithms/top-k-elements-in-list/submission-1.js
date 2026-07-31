class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let heap = new MinPriorityQueue(x => x[1]);
        let ans = [];
        nums.map((num) => {
            map.set(num, (map.get(num) ?? 0) + 1);
        })

        for(let i of map.keys()) {
            heap.enqueue([i, map.get(i)]);
            if(heap.size() > k) {
                heap.dequeue();
            }
        }  

        while(heap.size()){
            ans.push(heap.dequeue()[0]);
        }
        
        return ans;
    }
}
