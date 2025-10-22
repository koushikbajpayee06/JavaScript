const arr = [5,1,3,2,6];


function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
// if You want to transform the whole array you can do it with map function, it returns a new array

//Double - [10,2,6,4,12]
//Triple - [15,3,18,6,18]

const output = arr.map(triple);

const output1 = arr.map(function binary(x){
    return x.toString(2)
})

const output2 = arr.map((x)=>x.toString(2));
console.log(output);
console.log(output1);
console.log(output2);