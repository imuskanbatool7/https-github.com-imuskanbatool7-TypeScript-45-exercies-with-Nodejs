// CREATING A ARRAY
var userNames = ["Umekulsoom", "Hiba", "Heyam", "Admin", "Batool"];
// Using foreac loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello $(oneUser), would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
