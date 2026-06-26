let input = prompt("Enter a number")
if ( input == null ){
    console.log("Cancelled")
}else{
    let n = Number(input)
    if( !Number.isInteger(n) || n<0 ){
        console.log("Invalid Input. input must be a +ve number")
    }else{
        console.log(n) //n is the factor of itself.
        for(let i = Math.floor(n/2); i>=1; i--){ //if n = 10, then only the n/2 =5 can be the first factor of it, remaining half (9-6) are not its factors.
            if(n % i == 0){ 
                console.log(i)
            } 
        }
    }
}