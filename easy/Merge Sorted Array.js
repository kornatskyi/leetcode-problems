/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {


    const arr = []

    let i1 = 0
    let i2 = 0

    let i = nums1.length - 1
    while (nums1[i] === 0 && i + 1 > m) {
        nums1[i] = null

        i--;
    }
    let j = nums2.length - 1
    while (nums2[j] === 0 && j + 1 > n) {
        nums2[j] = null

        j--;
    }


    for (let i = 0; i < n + m; i++) {

        if (nums1[i1] > nums2[i2] || nums1[i1] === null) {
            arr.push(nums2[i2])
            i2++
        } else {
            arr.push(nums1[i1])
            i1++
        }

    }

    for (let i = 0; i < arr.length; i++) {
        nums1[i] = arr[i]

    }



};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)


