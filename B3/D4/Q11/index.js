// Created an Outer function
function outerFunction() {
    const message = "Hello from the closure!";

    // Inner function will create a closure on 'message'
    return function innerFunction() {
        console.log(message);
    };
}

const closureFunc = outerFunction(); // Even though outerFunction has finished executing, closureFunc will still have access to 'message'

closureFunc();

