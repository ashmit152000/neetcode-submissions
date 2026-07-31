class Solution {
    public boolean isAnagram(String s, String t) {
         if(s.length() != t.length()) {
            return false;
        }
        int[] freq = new int[26];

        for(int i = 0; i < s.length(); i++) {
            int val = (s.charAt(i) - 'a');
            freq[val]++;
        }

        for(int j = 0; j < t.length(); j++){
            int val = (t.charAt(j) - 'a');
            if(freq[val] > 0) {
                freq[val]--;
            }
        }

        for(int z = 0; z < freq.length; z++) {
            if(freq[z] > 0) {
                return false;
            }
        }

        return true;
    }
}
