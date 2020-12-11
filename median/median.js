var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a,b)=>a-b);
    let n = merged.length;
    if (n%2==1) {
        return merged[(n-1)/2];
    } else return (merged[n/2]+merged[(n/2)-1])/2;
};