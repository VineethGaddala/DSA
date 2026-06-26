let pr = prompt("Enter a number:");

if (pr == null){
    console.log("Cancelled")
} else {
    let n = Number(pr)
    if (!Number.isInteger(n) || n<0 ){
        console.log("invalid input. input must be a +ve number")
    }
    else {
        let factorial = 1; 
        for(let i = n; i>=1; i--){ // descending order
            factorial *= i
        }
        console.log(factorial)
    }
}

// n*(n-1)*(n-2)*...

// for( let i=1; i<=n; i++ ){ // ascending order
//     factorial = factorial * i;
// }