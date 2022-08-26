// Pls mention the link to your solution in the comments section not later than Friday morning.

// 1) Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example1:
// Input:nums1 = [1,3], nums2 = [2]
// Output:2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example2:
// Input:nums1 = [1,2], nums2 = [3,4]
// Output:2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

	
// nums1.length == m
	
// nums2.length == n
	
// 0 <= m <= 1000
	
// 0 <= n <= 1000
	
// 1 <= m + n <= 2000
	
// -106 <= nums1[i], nums2[i] <= 106

function median(arr1, arr2) {
    let len = arr1.length + arr2.length,
        idx = Math.ceil(len/2),
        result = 0;
    
      while (idx > 1) {
      if (arr1[0] < arr2[0]) {
          arr1.shift();
          idx--;
      } else {
          arr2.shift();
          idx--;
        }
      }
    
      if (!arr1.length) {
          result = arr2.shift();
      }
      if (!arr2.length) {
          result = arr1.shift();
      }
      if (arr1.length && arr2.length) {
          result = arr1[0] > arr2[0] ? arr2.shift(): arr1.shift();
      }
    
      if (len % 2 === 0) {
          if (!arr1.length) {
              result += arr2.shift();
          }
          if (!arr2.length) {
              result += arr1.shift();
          }
          if (arr1.length && arr2.length) {
              result += arr1[0] > arr2[0] ? arr2.shift(): arr1.shift();
          }
        result/=2;
      } 
    
    return result;
  }
  
  console.log(median([1,3], [2])); //2
  console.log(median([1,2], [3,4])); //2.5
  console.log(median([1,6,9,10], [2,7,11,15])); //8
  console.log(median([1,3,5,6,10], [2,4,7,8,9])); //5.5
  



// 2) Mergek Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output:[1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
// 1->4->5,
// 1->3->4,
// 2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example2:
// Input: lists= []
// Output: []

// Example3:
// Input: lists = [[]]
// Output: []

// Constraints:


	
// k == lists.length
	
// 0 <= k <= 104
	
// 0 <= lists[i].length <= 500
	
// -104 <= lists[i][j] <= 104
	
// lists[i] is sorted in ascending order.
	
// The sum of lists[i].length will not exceed 104.


function mergeKLists(lists) {
    let i = 0;
    
    let result = null;
    
    lists.forEach(v => {
        result = mergeList(result, v);
    });  
    
    return result;
};
                
function mergeList(l1 , l2) {
    if (l1 == null)
        return l2;
            
    if (l2 == null)
        return l1;
        
    if (l1.val < l2.val) {
        l1.next = mergeList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeList(l1, l2.next);
        return l2;
    }    
}