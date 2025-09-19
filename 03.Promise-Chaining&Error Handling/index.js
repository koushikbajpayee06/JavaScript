const cart = ["shoe","pants","kurta"];

const promise = createOrder(cart);

promise.then(function(){
    proceedToPayment(orderId)
});

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // CreateOrder
        // ValidateCart
        // orderId
        if(validateCard(cart)){
            const err = new Error("cart is not Valid");
            reject(err);
        }
        //logic for crreateOrder
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }
    })
    return pr;
}