let arr = [2, 4, 8, 45, 33, 1, 7]

let reverseArray = [];
for(let i = 0; i< arr.length; i++){
    reverseArray[i] = arr[arr.length - i -1];
}
console.log("Original Array: ", arr);
console.log("reverseArray 1: ", reverseArray);

// method 2 - no extra space/memory
let i = 0, j = arr.length-1;

while(i!=j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++
    j--
}

console.log("reverseArray 2: ", arr);
