function timer(dur, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${dur} ms finished`);
    }, dur);
}

console.log("Starting timer in...");

timer(5000, (message) => {
    console.log(message);
});


function timer(dur, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${dur} ms finished`);
    }, dur);
}

console.log("Timer starting in ...");

timer(5000, (message) => {
    console.log(message);
});