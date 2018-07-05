/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle===''){
        return 0;
    }
    var arrHay=haystack.split(needle);
    if(arrHay.length>1){
        return arrHay[0].length;
    }
    return -1;  
};