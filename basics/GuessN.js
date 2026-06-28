let n=0;

do {
    let input = prompt("Guess the number between 1-100")
    if ( input == null ){
        console.log("Cancelled")
        break;
    }else{
        n = Number(input)
        if( !Number.isInteger(n) || n<0 ){
            console.log("Invalid Input. input must be a +ve number")
        }
        if(n===10){
            console.log("You guessed it right!")
        }
    }
} while (n!==10);