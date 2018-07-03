/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++)
        {
            for(let j=i+1;j<nums.length;j++)
                {
                    var add=nums[i]+nums[j];
                    if(add==target)
                        {
                            return [i,j];
                        }       
                }
        }
};