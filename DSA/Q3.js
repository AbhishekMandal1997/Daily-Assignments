const A = [1,2,5,5,5,6,8,8,7,7,7,7,9,9,9,9]

function consecutiveSequence(A) {
    if (A.length === 0) return 0;
    A.sort((a, b) => a - b);

    let count = 1;
    let max = 1;
    for (let i = 1; i < A.length; i++){
        if (A[i] === A[i - 1]) {
            continue;
        } else if (A[i] === A[i - 1] + 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
    }
    return max;
}

console.log(consecutiveSequence(A));