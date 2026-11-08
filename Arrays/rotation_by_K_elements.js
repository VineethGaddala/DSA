// Left rotation by k steps

var arr = [1, 2, 3, 4, 5];
console.log("Original Array: ",arr)

let prompt = require("prompt-sync")();
var rotations = Number(prompt("Enter the no.of rotations: "));
rotations = rotations%arr.length; // to avoid uneccessary no.of rotations. if rotations = 6 ->(6%1)-> rotaions = 1
for(let k = 1; k<=rotations; k++){
    let value = arr[0];
    for(let i = 0; i<arr.length-1; i++){ 
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=value;
}

console.log(`Left rotaion by ${rotations} steps:`,arr)

// Left rotation by k steps

for(let k = 1; k<=rotations; k++){
    let value = arr[arr.length-1];
    for(let i = arr.length-1; i>0; i--){
        arr[i]=arr[i-1];
    }
    arr[0]=value;
}

console.log(`Right rotaion by ${rotations} steps:`,arr)