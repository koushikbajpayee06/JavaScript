
const p = new Promise((resolve, reject)=>{
    resolve("Promise Successfully Resolved");
});

// function getData(){
//     p.then((res)=>console.log(res));
// }

// getData();
// await can only be use inside async function

async function handlePromise(){
     const val = await p;
     console.log(val);
}

 handlePromise();


