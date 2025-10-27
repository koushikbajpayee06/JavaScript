const card = ["shoes","pants","kurta"];
// const promise = createOrder(cart);

createOrder(cart).then(()=> proceedToPayment(orderId))
.then(()=> showOrderSummary(paymentInfo))
.then(()=> updateWalletBalance(orderSummary));