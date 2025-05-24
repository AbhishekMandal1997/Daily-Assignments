const A = [1, 2, 5, 8, 6, 3, 4];
const K = 15;

function longestSubarray(A, K) {
    let sol = 0;
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = i; j < A.length; j++) {
            sum += A[j];
            if (sum === K) {
                let lenSubarray = j - i + 1;
                sol = Math.max(sol, lenSubarray);
            }
        }
    }
    return sol;
}

console.log(longestSubarray(A, K));