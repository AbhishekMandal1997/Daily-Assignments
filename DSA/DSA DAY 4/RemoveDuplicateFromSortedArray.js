let nums = [1, 1, 2];

function removeDuplicates(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            newArr.push(nums[i])
        }
    }
    return newArr;
}

console.log(removeDuplicates(nums));