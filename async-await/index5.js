
const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!")
    },10000);
    
});

async function getData(){
    const val = await p;
    console.log(val);
    console.log("Namaste JavaScript");
    
}
getData();