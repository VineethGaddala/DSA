// mirror - right angle traingle
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number:"));
// n = (n%2 !== 0)? Math.floor(n/2+1) : n/2 ; //handles odd number of rows
for ( let i = 1; i<=n; i++ ){ 
    for(let space=1; space <= n-i; space++){
        process.stdout.write("  ");
    }
    for(let j = 1 ; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log()// empty line
}


// Y pattern
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number:"));
let breakpoint = (n%2 !== 0)? Math.floor(n/2 + 1): n/2 
for ( let i = 1; i<= n; i++ ){ 
    if (i <= breakpoint) {
      for (let j = 1; j <= n; j++) {
        if (i === j || i + j === n + 1) {
          process.stdout.write("* ");
        } else {
          process.stdout.write("  ");
        }
      }
      console.log(); // empty line
    } else {
      for (let j = 1; j <= n; j++) {
        if(n/2 !== breakpoint){ // odd number of rows
            if(j === breakpoint){
                process.stdout.write("* ");
            } else{
                process.stdout.write("  ")
            }
        } else { // even number of rows
            if(j === breakpoint || j === breakpoint+1){
                process.stdout.write("* ");
            } else{
                process.stdout.write("  ")
            }
        }
      }
      console.log(); // empty line
    }
}