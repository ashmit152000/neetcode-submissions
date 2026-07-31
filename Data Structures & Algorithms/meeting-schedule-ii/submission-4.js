/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return min;
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */

    
    minMeetingRooms(intervals) {
        intervals.sort((a,b) => a.start - b.start);
        let minHeap = new MinHeap();
        console.log(intervals);
        if(intervals.length === 0) return 0;
        let count = 1;
        minHeap.insert(intervals[0].end);
        for(let i = 1; i < intervals.length; i++) {
            if(intervals[i].start < minHeap.peek()) {
                count++;
               
                
            } else {
                 minHeap.remove();
            }
            minHeap.insert(intervals[i].end);
            
        }

        return count;
    }
}
