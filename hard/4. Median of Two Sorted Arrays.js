/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let arr = []
    let j = 0
    let k = 0
    if (nums1[0] === undefined || nums2[0] === undefined) {
        arr = [...nums1, ...nums2]
    } else {
        for (let i = 0; i < nums1.length + nums2.length; i++) {
            if (nums1[j] >= nums2[k] || nums1[j] === undefined) {
                arr.push(nums2[k])
                k++

            } else {
                arr.push(nums1[j])
                j++

            }

        }
    }
    if (arr.length === 1) {
        return arr[0]
    }

    if (arr.length % 2 === 1) {


        return arr[Math.floor(arr.length / 2)]
    }

    return (arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)]) / 2

};

