let units = Number(prompt("Enter total units:"))
let price;

if (isNaN(units)){
    console.log("invalid input")
}

if (units < 100) { // unitss less than 100
    price = 4.2;
} else if (units <= 200) { // unitss from 101 to 200
    price = 6;
} else if (units <= 400) { // unitss from 201 to 400
    price = 8;
} else { // units greater than 400
    price = 13;
}

let bill = units * price;
console.log(bill)