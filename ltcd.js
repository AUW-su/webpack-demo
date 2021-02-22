/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split('');
    let len = arr.length;

    let obj = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let i=0; i<len; i=i+2) {
        if (obj[arr[i]] !== arr[i+1]) {
            return false;
        } 
    }
    return true;
};

let res = isValid("()");

console.log(res)