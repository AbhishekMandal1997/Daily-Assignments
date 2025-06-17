let age = 20;

function displayAge() {
    console.log("Current value of age-", age);
}
function changeAge(newAgeVal) {
    age = newAgeVal;
    console.log("Updated value of age-", age);
}
displayAge();
changeAge(26);
displayAge();