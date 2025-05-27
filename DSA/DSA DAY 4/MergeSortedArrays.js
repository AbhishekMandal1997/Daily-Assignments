
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;

function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;

    for (k = m + n - 1; k >= 0; k--) {
        if (j < 0) break;
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

    }
    return nums1;
}

console.log(merge(nums1, m, nums2, n));
