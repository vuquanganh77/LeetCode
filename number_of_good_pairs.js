var numIdenticalPairs = function(nums) {
    var result = 0;
    for(var i=0; i<nums.length-1; i++){
        for(var j=i+1; j<nums.length; j++){
            if(nums[i]==nums[j]){
                result++;
            }
        }
    }
    return result;
};