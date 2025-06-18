function outerFunction() { 
    let message = "Hello";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

const res = outerFunction();

res();