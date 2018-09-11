/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    var C=[];
    for(let i=0;i<A.length;i++){
        var B=A[i].reverse();
        for(let j=0;j<B.length;j++){
            if(B[j]===1){
                B[j]=0;
            }
            else{
                B[j]=1;
            }
        }
        C.push(B);
    }
    return C;
};