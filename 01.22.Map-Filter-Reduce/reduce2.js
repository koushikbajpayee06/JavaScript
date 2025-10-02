const arr = [5, 1, 3, 2, 6];
function findMax(arr){
    let max = arr[0];
    for (let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

let res = findMax(arr);
console.log(res);

const output = arr.reduce(function(max, curr){
    if(curr>max) {
        max = curr;
    }
    return max
},0);

console.log(output)