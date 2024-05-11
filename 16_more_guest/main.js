//Creating a Guest list array
var guesList = ["Umekulsoom", "Laraib", "Samana", "Muskan"];
//Making variable for those guest who can't come
var dontCome = guesList[0];
//Print the name of guest who can't come
console.log(dontCome, "Naii Ah Sakty han");
//Add or Remove Values from guest list Array
guesList.splice(0, 1, "hiba");
//Message print for bigger table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
//Adding a new guest at starting index of array
guesList.unshift("Atrooba");
//Adding a new guest at ending index of array
guesList.push("Heyam");
// Get a middle index of our guest array
var middleIndex = Math.floor(guesList.length / 2);
//Adding a new guest to middle index of array 
guesList.splice(middleIndex, 0, "Eshal");
//Print message of Updated list
console.log("Updated List of our Guests");
//Sending a invitation message tp our guests one by one with their names
guesList.forEach(function (oneguest) { return console.log("assala-o-alaikum ".concat(oneguest, ",would you like to dinner with me")); });
