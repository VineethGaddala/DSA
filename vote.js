let age = Number(window.prompt("Enter your age(0-100):"))

if(isNaN(age)){
    console.log("Enter a valid input")
}
else if (age >= 18) {
    console.log("You are eligible to vote.");
} else if (age > 0 && age < 18) {
    console.log("You are not eligible to vote yet.");
} else {
    console.log("Invalid input")
}