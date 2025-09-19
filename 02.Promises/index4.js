
const card = ["shoes","pants","kurta"];


createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(orderSummary){
         updateWalletBallance(orderSummary)
        });
    });
});
 






