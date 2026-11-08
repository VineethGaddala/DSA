let arr = [1, 2, 3, 1, 1, 1, 6, 7, 3, 2, 2, 4, 5, 4, 6];
console.log("Original Array: ", arr);
arr.sort((a,b)=>a-b);
console.log("Sorted Array: ", arr);

for(let i = 0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
        arr.splice(i,1);
        i--;
    }
}

console.log("New Array: ", arr);
