 // Define the make_album function
 
 function make_album(artist_name: string, album_tittle: string, tracks?: number){
   let album: {artist: string, tittle: string, tracks?: number} = {
    artist: artist_name,
    tittle: album_tittle,
   };
   if (tracks !== undefined){
    album.tracks = tracks
}

return album;
}

// Calling three functions and creating three variables with d/f values

let album1 = make_album("Muskan", "Album title 1");

let album2 = make_album("Umekulsoom", "Album title 2");

//Calling a make_album function with 3rd parameter
let album3 = make_album("Heyam", "Album title 3",10);

// Printing values of our object created by function
//variables
console.log(album1);

console.log(album2);

console.log(album3)