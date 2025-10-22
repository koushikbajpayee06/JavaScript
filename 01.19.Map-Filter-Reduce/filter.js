const arr = [5, 1, 3, 2, 6];

// filter all odd value inside array

function isOdd(x){
    return x%2;
}
function isGreater(x){
    return x>4;
}
const output = arr.filter(isOdd);
const output1 = arr.filter(isGreater);
const output2 = arr.filter(function isGreater(x){
    return x>4;
});
const output3 = arr.filter((x)=>x>4);
console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
