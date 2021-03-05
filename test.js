var maxSlidingWindow = function(nums, k) {
    let result = [];
    let len = nums.length;

    // 1、窗口大小 >= len
    if (k >= len) {
        nums.sort((a, b) => b-a);
        result.push(nums[0]);
    } else {
        // 2、窗口大小 < len，循环  
        let l = len - k + 1
        for (let i = 0; i < l; i++) {
            let arr = nums.slice(i, k+i);
        
            arr.sort((a, b) => b-a);
            result.push(arr[0]);
        }
    }
    return result;
};
let nums = [1,3,-1,-3,5];
let k = 3;
let res = maxSlidingWindow(nums, k);
console.log(res)