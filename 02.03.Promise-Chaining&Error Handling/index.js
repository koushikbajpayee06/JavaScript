const cart = ["shoe","pants","kurta"];

// create order is an async operation returns us a promise

const promise = createOrder(cart);
// console.log(promise)

//attaching a cb to proceedToPayment that 
promise.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);    
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    console.log("No matter what happenes, I will definately be called");
})

/// Producer part of createOrder
// promise constructor taked a function having two parameter resolve and reject which are given by js to build promise

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // CreateOrder
        // ValidateCart
        // orderId
        if(!validateCard(cart)){
            // create error inside js
            const err = new Error("Cart is not Valid");
            reject(err);
        }
        //logic for createOrder on success return orderId
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000);
        }
    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function( resolve, reject){
        resolve("Payment Successfull");
    });
}
function validateCard(cart){
    return false;
}