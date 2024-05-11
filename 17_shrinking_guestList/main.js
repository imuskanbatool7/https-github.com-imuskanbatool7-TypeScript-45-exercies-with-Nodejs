//Creating a Guest list array
var guestList = ["Umekulsoom", "Laraib", "Samana", "Muskan"];
//Making variable for those guest who can't come
var dontCome = guestList[0];
//Print the name of guest who can't come
console.log(dontCome, "Naii Ah Sakty han");
//Add or Remove Values from guest list Array
guestList.splice(0, 1, "hiba");
//Message print for bigger table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
//Adding a new guest at starting index of array
guestList.unshift("Atrooba");
//Adding a new guest at ending index of array
guestList.push("Heyam");
// Get a middle index of our guest array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array 
guestList.splice(middleIndex, 0, "Eshal");
//Print message of Updated list
console.log("Updated List of our Guests");
//Sending a invitation message tp our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("assala-o-alaikum ".concat(oneguest, ",would you like to dinner with me")); });
//Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time,so i can only invite two Guests to dinner with me");
//Using while-loop to remove guest from the array untill two nmes remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry,".concat(removedGuest, " i cant invite you to dinner"));
}
//Sending a invititions to the last twp guest on the list
console.log("Invitation to the last 2Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ",you are invited to dinner")); });
//Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
