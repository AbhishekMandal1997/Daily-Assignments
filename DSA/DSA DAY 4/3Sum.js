var threeSum = function (nums) {
    let L = nums.length;
    let newSet = new Set();

    for (let i = 0; i < L - 2; i++) {
        for (let j = i + 1; j < L - 1; j++) {
            for (let k = j + 1; k < L; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    newSet.add(triplet.toString())
                }
            }
        }
    }
    let sol = Array.from(newSet).map(str => str.split(',').map(Number))
    console.log(sol)
};

threeSum([-1, 0, 1, 2, -1, -4]);