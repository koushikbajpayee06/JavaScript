const cart = ["shoe","pants","kurta"];

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId)
});

/// Producer
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // CreateOrder
        // ValidateCart
        // orderId
        if(!validateCard(cart)){
            const err = new Error("cart is not Valid");
            reject(err);
        }
        //logic for crreateOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000);
        }
    })
    return pr;
}

function validateCard(cart){
    return true;
}