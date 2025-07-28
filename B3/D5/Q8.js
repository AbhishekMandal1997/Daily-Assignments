function personInfo() {
    console.log("Name-", this.name);
    console.log("Age-", this.age);
}

let person = {
    name: "Prateek",
    age: 88
};

personInfo.call(person);
