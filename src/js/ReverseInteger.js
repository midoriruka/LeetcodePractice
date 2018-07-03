/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var y;
    if(x == 0){
        return 0;
    }
    else{ 
        y = Number((Math.abs(x)).toString().split('').reverse().join(''));
        if(y < (-Math.pow(2,31)) || y > (Math.pow(2,31)-1)){
            return 0;
        }
        else{
            if(x < 0) {
                y = -y;
            }
            return y;
        }    
    } 
};