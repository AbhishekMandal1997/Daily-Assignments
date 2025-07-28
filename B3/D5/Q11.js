let user = {
    username: "john_doe",
    showUsername: function () {
        console.log("Method:", this.username); // 'this' refers to the user object, It will perfectly access user.username
    }
};

function displayUsername() {
    console.log("Function:", this.username); // In non strict mode, 'this' refers to the global object
}

user.showUsername();    // Method: john_doe
displayUsername();      // Function: undefined (in strict mode)

