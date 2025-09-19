

const card = ["shoes","pants","kurta"];
// createOrder no longer take call back function, it will take cart details and return us a promise.
const promise= createOrder(cart);

// {data: undefined}
// {data: orderDetails}

promise.then(function(orderId){
    proceedToPayment(orderId);
}); 