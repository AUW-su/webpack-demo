let nums = [1, 3, -1, -3, 5, 7, 8, 9];
let k = 3;

var maxSlidingWindow = function(nums, k) {
    let result = [];
    let len = nums.length;

    let windowArr = [];

    if (k <= len) {
        for (let i = 1; i< k; i++) {

            if (nums[1] >= nums[i]) {
                windowArr.push(nums[i+1]);
            } else {
                windowArr.push(nums[i+1])
            }
        }

    }
    return result;
};

let res = maxSlidingWindow(nums, k);
console.log(res)


var maxSlidingWindow = function(nums, k) {
    const deque=[]; //存放单调队列的下标
    const  result=[]; 
    for(let i=0;i<nums.length;i++){
      if(i-deque[0]>=k) deque.shift(); //在滑动窗口之外的直接从队头删掉
      while(nums[deque[deque.length-1]]<=nums[i]){
          deque.pop();  //如果新加进来的数比单调队列中原来的数都要大，则直接弹出队列中的其他数
      }
      deque.push(i);
      //数组下标从0开始，k=3时 ，下标为0，1，2的数组元素构成一个滑动窗口，所以条件为i>=k-1就可以将答案存入res中
      if(i>=k-1) {  
          result.push(nums[deque[0]]);
      }
    }
    return result;
 };


var maxSlidingWindow = function(nums, k) {
    const deque = []; // 存放单调队列的下标
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // 在滑动窗口之外的直接从队头删掉
        if (i - deque[0] >= k) {
            deque.shift();
        }
        // 如果新加进来的数比单调队列中原来的数都要大，则直接弹出队列中的其他数
        if (nums[deque[deque.length-1]]<=nums[i]) {
            deque.pop();
        }
        deque.push(i);

        // 数组下标从0开始，k=3时 ，下标为0，1，2的数组元素构成一个滑动窗口，所以条件为i>=k-1才可以将窗口的最大值存入res中
        if (i >= k-1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};