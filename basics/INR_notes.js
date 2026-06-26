// Divide the given amount into the combinations of INR notes and rupees

let amount = Number(prompt("Enter the amount:"))
if (isNaN(amount)){
    console.log("invalid input")
}
console.log(amount)
let INR500 = INR200 = INR100 = INR50 = INR20 = INR10 = INR1_coins = 0;
if (amount>=500){
    INR500 = Math.floor(amount/500);
    amount = amount - (500*INR500)
    console.log(amount)
}
if(amount<500 && amount>=200){
    INR200 = Math.floor(amount/200);
    amount = amount - (200*INR200)
    console.log(amount)
}
if(amount<200 && amount>=100){
    INR100 = Math.floor(amount/100);
    amount = amount - (100*INR100)
    console.log(amount)
}
if(amount<100 && amount>=50){
    INR50 = Math.floor(amount/50);
    amount = amount - (50*INR50) 
    console.log(amount) 
}
if(amount<50 && amount>=20){
    INR20 = Math.floor(amount/20);
    amount = amount - (20*INR20)
    console.log(amount)
}
if(amount<20 && amount>=10){
    INR10 = Math.floor(amount/10);
    amount = amount - (10*INR10)
    console.log(amount)
}
if(amount<10){
    INR1_coins = amount;
}

console.log(`
    500 notes = ${INR500}
    /n 200 notes = ${INR200}
    /n 100 notes = ${INR100}
    /n 50 notes = ${INR50}
    /n 20 notes = ${INR20}
    /n 10 notes = ${INR10} 
    /n 1 rupee coins = ${INR1_coins}
    `)
    

    