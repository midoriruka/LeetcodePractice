/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var arrJ=J.split('');
    var count=0;
    for(var i=0;i<arrJ.length;i++)
        {
            var s=arrJ[i];
            count+=(S.split(s)).length-1;  
        }
    return count;
};