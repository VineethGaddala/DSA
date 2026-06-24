let a = 10;
let b = 20;

console.log( a, b);

// Technique 1 : temporary variables
let c;
c = a; // c = 10
a = b; // a = 20
b = c; // b = 10
console.log( a, b )

// Technique 2 : arithmetic operations
a = a + b; //a = 30
b = a - b; //b = 30-20 = 10
a = a - b; //a = 30-10 = 20
console.log( a, b )

// Technique 3 : Destructuring
[a, b] = [b, a];
console.log( a, b)

console.log(Math.trunc(Math.random()*9000+1000))
