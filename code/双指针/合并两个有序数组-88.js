/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
  // 两个指针指向数组非空位置的末尾
  let i = m - 1;
  let j = n - 1;
  // 第三个指针指向第一个数组的末尾 填充数据
  let k = nums1.length - 1;

  while (i >= 0 && j >= 0) {
    let val1 = nums1[i];
    let val2 = nums2[j];

    if (val1 > val2) {
      nums1[k] = val1;
      i--;
    } else {
      nums1[k] = val2;
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
