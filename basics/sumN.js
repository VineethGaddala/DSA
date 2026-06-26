let pr = prompt("Enter a number:");

if (pr == null){
    console.log("Cancelled")
} else {
    let n = Number(pr)
    if (isNaN(n)){
        console.log("invalid input. input must be a number(+ve)")
    } else {
        if (n>0){
            let sum = 0;
            for( let i=1; i<=n; i++ ){
                sum += 1;
            }
            console.log(sum)
        } else {
            console.log("number must be a +ve")
        }
    }
}