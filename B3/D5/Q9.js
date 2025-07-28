function deepClone(O) {
    return JSON.parse(JSON.stringify(O));
}

let originalObj = {
    name: "Alice",
    hobbies: ["reading", "traveling"]
};

let cloneObj = deepClone(originalObj);

cloneObj.hobbies.push("cplaying flute");

console.log("Original:", originalObj);
console.log("Clone:", cloneObj);
