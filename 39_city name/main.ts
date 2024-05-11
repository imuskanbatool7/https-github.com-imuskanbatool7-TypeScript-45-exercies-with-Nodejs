// Creating a function with parameters which a values in string
function city_country(city: string, country: string) : string{
    return `${city} , $(Country)`;
}

// Calling a function and print the return value

console.log(city_country("karachi" , "Pakistan"));

console.log(city_country("Tokyo" , "japan"));

console.log(city_country("Berlin","Germany"));