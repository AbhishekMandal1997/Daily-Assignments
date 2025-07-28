function multiply(x, y) {
    return x * y;
}

function multiplyNumbers(num1, num2) {
    return multiply.apply(null, [num1, num2]);
}

let sol = multiplyNumbers(4, 5);
console.log(sol);
