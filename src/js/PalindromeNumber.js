/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    var len=1;
    while(x/len>10){
        len*=10;
    }
    while(x>0){
        if(parseInt(x/len) !== x%10)
            {
                return false;
            }
        //去掉第一位和最后一位
        x = parseInt(x%len/10);
        len=len/100;
    }
    return true;   
};