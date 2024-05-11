//Making a array of countries and print its orignal order
let countriesToVisit: String[] = ["Saudi", "China", "Paris", "Brazil"];
console.log("Orignal Order:", countriesToVisit);

// Print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:",[...countriesToVisit].sort());

//Show that the array is still in its orignal order
console.log("Still in Orignal Order:", countriesToVisit);

//Print the array in reversed order without the actual array list
console.log("Reverse Order:",[...countriesToVisit].reverse());

//Show that the array is still in its orignal order
console.log("Still in Orignal Order:", countriesToVisit);

//We have changed the orignal array order now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to its orignal order
console.log("Back to Orignal Order:", countriesToVisit.reverse());

//Print the pair array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());


//We have changed again the orignal array order now in reverse order again
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());