const cart = ["shoe","pants","kurta"];

// createOrder, proceedToPayment,showOrderSummary, updateWallet


const p = createOrder(cart);
p.then(function(orderId){
    // console.log(orderId)
    return orderId
})
.then(function(orderId){
    console.log(paymentInfo);
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(orderStatusInfo){
    console.log(orderStatusInfo)
})
.then(function(orderStatusInfo){
    return UpdateWalled(orderStatusInfo)
})
.then(function(updateWallet){
    console.log(updateWallet)
})



function createOrder(cart){
    return new Promise(function(resolve,reject){
        resolve("12345");
    })
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successfull");
    })
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve, reject){
        resolve("Order Successfully Placed");
    })
}

function UpdateWalled(orderStatusInfo){
    return new Promise(function(resolve,reject){
        resolve("Wallet Updated")
    })
}