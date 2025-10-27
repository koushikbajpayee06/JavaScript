const API_URL = "https://api.github.com/users/akshaymarch7";


async function handlePromise(){
   const data =  await fetch(API_URL);
   const json = await data.json()
   console.log(json)
}
handlePromise()