// two pointer theory
let arr = [ 0, 1, 0, 1, 0, 0, 1, 1 , 1];
let i = 1; j = 0;

// for(let k =0 ; k< arr.length; k++){
//     i++;
//     if( arr[i] == 0 && arr[j] == 1 ){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
// }

while(i<arr.length){
    i++;
    if(arr[i]==0){
        arr[i]=1;
        arr[j]=0;
        j++;
    }
}
console.log(arr)