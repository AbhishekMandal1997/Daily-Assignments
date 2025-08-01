function timer(dur, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${dur} ms finished`);
    }, dur);
}

console.log("Timer starting in...");

timer(3000, (message) => {
    console.log(message);
});
