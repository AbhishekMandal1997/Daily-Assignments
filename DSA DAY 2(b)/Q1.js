//Roman To Integer

var romanToInt = function (s) {
    let sol = 0;
    let prev = 0;
    const romanNum = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }

    for (let i = s.length - 1; i >= 0; i--) {
        const curr = romanNum[s[i]];
        if (curr < prev) {
            sol -= curr;
        } else {
            sol += curr;
        }
        prev = curr;
    }
    return sol
};

console.log(romanToInt("MCM"));