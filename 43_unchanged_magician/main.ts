// Define a function to string magician names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through.map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians name
let magician_names = ["Harry poter", "Son pari", "Eric"];

// Making a copy of orignal array through .Slice() function
let copy_magician_names = magician_names.slice()

// Modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);

// Show both arrays orginal and copied

//Orginal
console.log("Orginal array\n")
show_magicians(magician_names);
//Copied
console.log("\nCopied array\n")
show_magicians(copy_great_magicians);

