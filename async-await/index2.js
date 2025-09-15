
const p = new Promise((resolve, reject)=>{
    resolve("Promise Successfully Resolved");
});

function getData(){
    p.then((res)=>console.log(res));
}

getData();