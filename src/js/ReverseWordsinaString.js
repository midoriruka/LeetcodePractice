/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr=s.split(' ');
    var sr='';
    for(i=0;i<arr.length;i++){
        sr+=arr[i].split('').reverse().join('')+' ';
    }
    return sr.slice(0,sr.length-1);
};