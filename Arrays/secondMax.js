let arr = [2, 4, 8, 45, 33, 1, 7, 45]
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for(let i = 0; i< arr.length ; i++ ){
    if(arr[i]>max){
        sMax = max;
        max=arr[i];
    } else if(arr[i]>sMax){
        if(arr[i] == max){
            continue;
        }
        sMax = arr[i];
    }
}

console.log(max, sMax);