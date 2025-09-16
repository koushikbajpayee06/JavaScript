
const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },10000)
});
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },5000)
});

async function handlePromise(){

    console.log("Hello World");
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste Raect");
    console.log(val2);

}
handlePromise();