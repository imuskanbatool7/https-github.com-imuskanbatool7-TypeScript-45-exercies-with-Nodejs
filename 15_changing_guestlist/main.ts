let guestList = ["Umekulsoom", "Laraib", "Samana"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi ahh skta");

guestList.splice(0, 1, "Hiba");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me`));