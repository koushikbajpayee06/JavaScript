const arr = [5, 1, 3, 2, 6];

// reduce function is basically used at a place where you have to take all elements in the array
//  and come up with a single value out of them 

// find the sum of all the array or find the max number in all the array
function findSum(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let res = findSum(arr);
console.log(res);


const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
},0);

console.log(output)