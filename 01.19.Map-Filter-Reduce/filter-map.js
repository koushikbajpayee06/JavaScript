const users =[
    {firstName:"Koushik", lastName:"Bajpayee", age:26},
    {firstName:"Aritra", lastName:"Bhaumik", age:45},
    {firstName:"Abhishek", lastName:"Dhabal", age:67},
    {firstName:"Jayeeta", lastName:"Barman", age:26},
]

const output = users.filter((x)=>x.age<30).reduce((acc,curr)=>{
    acc.push(curr.firstName+" "+ curr.lastName);
    return acc;
},[])
console.log(output)