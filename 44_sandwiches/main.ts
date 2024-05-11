// Define a function with a rest parameter that accept items argument representing our sandwich

function makeSAndwich(...items: string[]){
   console.log("\nMaking a sandwich with the following items: \n");

   items.forEach(singleItem => console.log(singleItem));

   console.log("\nNow Enjoy Sandwich");

}

//Call the function 3 times with 3 d/f number of arguments
makeSAndwich("Chicken", "Cheese", "Mayo", "Egg");

makeSAndwich("Bread","Butter");

makeSAndwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce","Tomato");


