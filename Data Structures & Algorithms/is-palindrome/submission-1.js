class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let copyString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let i = 0;
    let j = copyString.length - 1;

    while (i <= j) {
        if (copyString[i] !== copyString[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
    }
}
