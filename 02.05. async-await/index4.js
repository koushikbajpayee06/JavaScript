const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!")
    },10000);
    
});

function getData(){
    p.then((res)=>{
        console.log(res);
    });
    console.log("Namaste JavaScript");
}
getData();