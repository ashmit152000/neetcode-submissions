/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(!intervals.length) return true;
        intervals.sort((a, b) => a.start - b.start);
        console.log(intervals);
        let lastInterviewEndTime = intervals[0].end;
        for(let i = 1; i < intervals.length; i++) {
            if(intervals[i].start < lastInterviewEndTime) return false;
            lastInterviewEndTime = Math.max(intervals[i].end, lastInterviewEndTime);
        }

        return true;
    }
}
