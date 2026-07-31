class Solution {
    public int longestConsecutive(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }

        
        int maxSequence = Integer.MIN_VALUE;
        for(int num : set) {
            if(!set.contains(num - 1)) {
                int currentNum = num;
                int count = 1;

                while(set.contains(currentNum + 1)) {
                    currentNum++;
                    count++;
                }

                maxSequence = Math.max(maxSequence, count);

            }
        }

        return maxSequence;
        
    }
}
