
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!")
    },10000);
    
});

async function getData(){
    console.log("Hello world");
    const val = await p;
    console.log(val);
    console.log("Namaste JavaScript");
    // resolved the value for two times, to see how the function behaves
    const val2 = await p;
    console.log(val);
    console.log("Namaste JavaScript");
    
}
getData();