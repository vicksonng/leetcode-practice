/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n <= 1) {
        return 1;
    }
    
    let previous = 1;
    let current = 2;
    
    for (let i = 3 ; i <= n ; i ++) {
        let tmp = current;
        current += previous;
        previous = tmp;
    }
    return current;
};