/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var x=0;
    if(num<=0){
        return false;
    }
    for(i=1;i<=num/2;i++){
        if(num%i==0){
            x+=i;
        }
    }
    return x==num;
};