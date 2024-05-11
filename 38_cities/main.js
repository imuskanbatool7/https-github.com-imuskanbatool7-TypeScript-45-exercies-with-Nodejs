//Describe a function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling a function
describe_city("karachi");
describe_city("lahore");
describe_city("berlin", "Germany");
