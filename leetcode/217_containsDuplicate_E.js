var containsDuplicate = function(nums) {
    numsSet = new Set(nums);
    if (numsSet.size < nums.length) {
        return true; 
    } else {
        return false;
    }    
};

