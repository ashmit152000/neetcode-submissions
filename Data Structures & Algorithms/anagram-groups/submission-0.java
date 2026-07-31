class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // List<Character> keys = new ArrayList<>();
        HashMap<String, List<String>> hash = new HashMap<>();

        for(String s : strs) {
            int[] freq = new int[26];
            for(Character c : s.toCharArray()) {
                freq[c - 'a']++;
            }
            StringBuilder sb = new StringBuilder();
            for(int count : freq) {
                sb.append('#').append(count);
            }

            String key = sb.toString();
            
            if(hash.get(key) == null) {
                hash.put(key, new ArrayList<>());
            }

            hash.get(key).add(s);
        }


        return new ArrayList<>(hash.values());

        
    }
}
