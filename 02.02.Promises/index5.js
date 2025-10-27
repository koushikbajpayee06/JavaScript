const card = ["shoes","pants","kurta"];
// const promise = createOrder(cart);

createOrder(cart).then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
}).then(function(orderSummary){
    return updateWalletBalance(orderSummary)
});