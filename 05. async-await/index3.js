
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!")
    },10000);
    
});

async function handlePromise(){
    const val = await p;
    console.log(val);
}
handlePromise();