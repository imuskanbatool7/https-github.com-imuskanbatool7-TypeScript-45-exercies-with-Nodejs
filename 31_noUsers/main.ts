let userNames = ["Umekulsoom", "Hiba", "Heyam", "Admin", "Batool"]

userNames = []

if(userNames.length === 0){
    console.log("Your Arrayt in Empty We need tp find some users!")
}else{
    // Using foreach loop on array
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello $(oneUser), would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again.`)
        }
    })
}