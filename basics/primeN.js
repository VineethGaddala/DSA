let input = prompt("Enter a number")
if ( input == null ){
    console.log("Cancelled")
}else{
    let n = Number(input)
    if( !Number.isInteger(n) || n<0 ){
        console.log("Invalid Input. input must be a +ve number")
    }else{
        let prime = true;
        for(let i = 2; i<=Math.floor(n/2); i++){
            if( (n%i == 0) && (i !== n) && (i !== 1) ) {
                prime = false;
                break;
            }
        }
        (prime==true && n !== 1) ? console.log(`${n} is a prime number`) : console.log(`${n} is not a prime number`)
    }
}