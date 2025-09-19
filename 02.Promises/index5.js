const card = ["shoes","pants","kurta"];
// const promise = createOrder(cart);

createOrder(cart).then(function(orderId){
    proceedToPayment(orderId);
})
.then(function(paymentInfo){
    showOrderSummary(paymentInfo);
}).then(function(orderSummary){
    updateWalletBalance(orderSummary)
});