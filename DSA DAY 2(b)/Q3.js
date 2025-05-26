//Integer to Roman

function integerToRoman(N) {
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let Rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let sol = "";

    for (let i = 0; i < val.length; i++) {
        if (N >= val[i]) { 
            let count = 0;
            for (let j = N; j >= val[i]; j -= val[i]) {
                sol += Rom[i];
                N -= val[i];
                count++;
            }
        }
    }
    return sol;
}

console.log(integerToRoman(2025));