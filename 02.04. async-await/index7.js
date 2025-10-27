const API_URL = "https://sdghfhj";


async function handlePromise(){
    try{
        const data =  await fetch(API_URL);
        const json = await data.json()
        console.log(json);
    }catch(err){
        console.log(err);
    }

//    fetch().then(res=>res.json()).then(res=>console.log(res))
}
handlePromise()