let price = Number(prompt("Enter the original price:"))
if (isNaN(price)){
    console.log("invalid input")
}

let discount;
if (price < 5000) { // Prices less than 5000
    discount = 0;
} else if (price <= 7000) { // Prices from 5000 to 7000
    discount = 5;
} else if (price <= 9000) { // Prices from 7001 to 9000
    discount = 10;
} else { // Prices greater than 9000
    discount = 15;
}

let finalPrice = price - ((discount/100)*price)
console.log(finalPrice)