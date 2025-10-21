console.log('start');

function cb(){
    console.log(" cb")
};
cb();

setTimeout(cb(),0);

console.log("End");

