class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    /**
 * @param {string[]} strs
 * @return {string[][]}
 */
 groupAnagrams(strs) {
  let finalCountObject = {};
  for (let str of strs) {
    let charCount = new Array(26).fill(0);

    for (let ch of str) {
        charCount[ch.charCodeAt(0) - 97]++;
    }
    const key = charCount.join('#');

    (finalCountObject[key] ??= []).push(str);
    
  }

    let finalArray = [];
    for(let [key, value] of Object.entries(finalCountObject)) {
        finalArray.push(value);
    }

    return finalArray;
}
}
