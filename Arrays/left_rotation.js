// **Rotation by 1 step**

var arr = [1, 2, 3, 4, 5];
let i = arr.length-1;
let exchanging_value = arr[i];
let previous_value;

for(let j = 0; j< arr.length; j++){
    i--;
    if(j==4) {
        arr[arr.length-1]=exchanging_value;
        break;
    }
    existing_value = arr[i];
    arr[i] = exchanging_value;
    exchanging_value = existing_value;
}
console.log(arr);

// Left rotation
var arr = [1, 2, 3, 4, 5];
let first_value = arr[0];

for(let i = 0; i<arr.length-1; i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = first_value;
console.log(arr);

// Right rotation
var arr = [1, 2, 3, 4, 5];
let last_value = arr[arr.length-1];

for(let i = arr.length-1; i>=0; i--){
    arr[i] = arr[i-1];
}
arr[0] = last_value;
console.log(arr);